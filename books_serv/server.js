// const app = require('./app');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
// const bookRoutes = require('./routes/bookroutes');

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'Book Service API',
//       version: '1.0.0',
//       description: 'CRUD API for managing books',
//     },
//     servers: [
//       {
//         url: 'http://localhost:3001',
//       },
//     ],
//   },
//   apis: ['./routes/*.js'],
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/BookStore/v1/books', bookRoutes);

// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Book Service running on port ${PORT}`);
//   console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
// });
