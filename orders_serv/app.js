const express = require('express')
const connectDB = require('./db/db')
const orderRoutes = require('./routes/orderroutes')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
// const connectDB = require('./connectDB')
const app = express()
const PORT = process.env.PORT || 3002

connectDB()

app.use(express.json())

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Order Service API',
      version: '1.0.0',
      description: 'API for managing orders',
    },
    servers: [
      {
        url: 'http://localhost:3002',
      },
    ],
  },
  apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/BookStore/v1/orders', orderRoutes)

app.listen(PORT, () => {
  console.log(`Order service running on http://localhost:${PORT}`)
})
