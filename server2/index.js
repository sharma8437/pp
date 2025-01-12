const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./db/connectDB.js')
require('dotenv').config();


const app = express();
const port = process.env.PORT;

const userRoute = require('./routes/userRoutes.js')

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true
}))


app.get('/', (req, res) => {
    res.send("Server is running..")
})

app.use('/user',userRoute)


// db connection 
connectDB()


app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})