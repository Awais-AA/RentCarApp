const mongoose = require("mongoose");


const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Mongo DB Connection Successfull");
        
    } catch (err) {
        console.error(err);
    }
}



module.exports = connectDB;