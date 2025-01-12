const configDotenv  = require("dotenv");
const express = require("express")
const app = express();
const cors = require('cors')
const routes = require('./routes/router.js');
const connectDB = require('./utils/connectDB.js')

configDotenv.config()


//database connection

connectDB()


//middleware
app.use(express.json())
app.use(cors())
app.use('/api',routes)



// app.get('/',(req,res)=>{
//     res.send("hello")
// })


const port =process.env.PORT || 8080;


app.listen(port, ()=>{
    console.log(`server is runing ${port}`)
})