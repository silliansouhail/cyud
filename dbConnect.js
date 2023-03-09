const mongoose = require('mongoose')
const server = '127.0.0.1:27017';
const database = 'crud';      

const connectDB =async()=>{
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log("Database connection established successfully");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB