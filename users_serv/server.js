const express = require('express')
const connectDB = require('./db/db')
const userRoutes = require('./routes/userroutes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swaggers/swaggers.json')

const app = express()
app.use(express.json())

connectDB()

app.use('/api/users', userRoutes)
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const PORT = 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
