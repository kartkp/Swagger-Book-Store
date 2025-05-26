const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Order Service API',
      version: '1.0.0',
      description: 'API documentation for the Order Service',
    },
    basePath: '/Order/v1',
  },
  apis: ['./routes/*.js'],
};
module.exports = swaggerJsdoc(options);
