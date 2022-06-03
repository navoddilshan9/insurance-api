const mongoose = require('mongoose')

const URL =
  'mongodb+srv://admin:admin123@cluster0.baorn.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  console.log('DB connected ....')
}

module.exports = connectDB
