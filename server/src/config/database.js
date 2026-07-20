const mongoose = require("mongoose");

const Connect = async () =>{
    try{
        const conn = await mongoose.connect(process.env.DB)

        console.log("Connected to mongoDB")
    }catch(err){
        console.log(err)
    }
}

module.exports= Connect