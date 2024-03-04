import Fastify from 'fastify';
import userRoutes from './user/user.route';

const fastify = Fastify();

fastify.get('/healthcheck', function () {
  return { status: 200 };
});

async function main() {
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
