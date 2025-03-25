const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 5000

// connect to the database
connectDB()



app.listen(port, () => console.log(`Example app listening on port ${port}!`))