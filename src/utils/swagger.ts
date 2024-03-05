export const swaggerOptions = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify REST API',
      description: 'API documentation for the Fastify API',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  uiConfig: {
    docExpansion: 'none' as 'none' | 'list' | 'full',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header: any) => header,
};
