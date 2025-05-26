const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Service API',
      version: '1.0.0',
      description: 'CRUD API for managing books',
    },
    servers: [
      {
        url: 'http://localhost:3001/books',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJsdoc(options);
