const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://kartkp:kartknteam@cwscandb.lj5crqc.mongodb.net/user_serv', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongodB connected user_serv')
  } catch (error) {
    console.error('MongoDB connection erorr:', error.message)
    process.exit(1)
  }
}
module.exports = connectDB
