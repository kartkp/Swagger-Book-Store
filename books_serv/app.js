const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const bookRoutes = require('./routes/bookroutes');

dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
}).then(() => {
    consol.log('Mongodb is connected succesfully')
}).catch((errr) => {
    console.error('Mongodb connection faild:', errr)
    process.exit(1)
})

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api`);
});
