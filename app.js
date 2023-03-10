require('dotenv').config()

const express = require('express')
const NoteRoutes = require('./routes/NoteRoute')
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/',NoteRoutes)

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })