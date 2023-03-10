const express = require('express')
var cors = require('cors') 
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://digicerti:jrdv123@digi.ce0yc3q.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./Routes/auth'))


app.listen(port, () => {
  console.log(`Digicerti backend listening at http://localhost:${port}`)
})