const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const orderRoutes = require('./routes/orderroutes')
const app = require('./app');
app.use(express.json())

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Order Service API',
      version: '1.0.0',
      description: 'Manage book orders',
    },
    servers: [{ url: 'http://localhost:3002' }],
  },
  apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/orders', orderRoutes)

const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`))
