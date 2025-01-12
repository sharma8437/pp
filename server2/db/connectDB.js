const mongoose = require('mongoose')


const connectDB = async()=>{

    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
        
    } catch (error) {
        console.log(`database not connected ${error}`)
        
    }
}

module.exports=connectDB;