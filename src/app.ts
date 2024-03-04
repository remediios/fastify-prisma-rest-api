import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/healthcheck', function () {
  return { status: 200 };
});

async function main() {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on port 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
