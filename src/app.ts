import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fastifyJwt from '@fastify/jwt';
import userRoutes from './modules/user/user.route';
import { userSchemas } from './modules/user/user.schema';

const fastify = Fastify();

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
  for (const schema of userSchemas) {
    fastify.addSchema(schema);
  }

  fastify.register(userRoutes, { prefix: 'api/users' });

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
