const express = require('express')
const cors =require('cors')
const connectDB = require('./dbConnect')
const router = require('./userRouter')
const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api',router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))