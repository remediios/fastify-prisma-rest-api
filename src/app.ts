import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fastifyJwt from '@fastify/jwt';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import userRoutes from './modules/user/user.route';
import productRoutes from './modules/product/product.route';
import { userSchemas } from './modules/user/user.schema';
import { productSchemas } from './modules/product/product.schema';
import { swaggerOptions } from './utils/swagger';

export const fastify = Fastify();

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: any;
  }
}

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      id: number;
      email: string;
      name: string;
    };
  }
}

fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET ?? 'your_default_secret_value',
});

fastify.decorate(
  'authenticate',
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (error) {
      return reply.send(error);
    }
  }
);

fastify.get('/healthcheck', function () {
  return { status: 200 };
});

async function main() {
  const allSchemas = [...userSchemas, ...productSchemas];
  for (const schema of allSchemas) {
    fastify.addSchema(schema);
  }

  await fastify.register(fastifySwagger, swaggerOptions);
  await fastify.register(fastifySwaggerUi, swaggerOptions);

  fastify.register(userRoutes, { prefix: 'api/users' });
  fastify.register(productRoutes, { prefix: 'api/products' });

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
