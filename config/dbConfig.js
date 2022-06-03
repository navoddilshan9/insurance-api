const mongoose = require('mongoose')
require('dotenv/config')
const URL = process.env.DB_CONNECTION

const connectDB = async () => {
  await mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  console.log('DB connected ....')
}

module.exports = connectDB
