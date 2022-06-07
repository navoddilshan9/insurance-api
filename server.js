const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

//Database
var connectDB = require('./config/dbConfig.js')

//connect with DB
connectDB()

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Import Routes
const usersRouter = require('./routes/userRouter')
const accidentRouter = require('./routes/accidentRouter')
const paymentRouter = require('./routes/paymentRouter')

//routes
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/accident', accidentRouter)
app.use('/api/v1/payment', paymentRouter)

const user = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
