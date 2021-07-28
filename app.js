require('./config/db')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
//ROUTES
const authRoutes = require('./routes/auth')
const surveyRoutes = require('./routes/survey')




//middlewares
app.use(bodyParser.json()) //it is used for parsing the data coming from client side like username email etc
app.use(cookieParser()) //set data in cookies or get data from cookies we use this middle ware
app.use(cors())

//routes
app.use('/api', authRoutes)
app.use('/api', surveyRoutes)



const PORT = process.env.PORT || 8078

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})
