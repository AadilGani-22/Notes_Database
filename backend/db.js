const { default: mongoose } = require("mongoose")

const connectToMongo = async() =>{
    try{
        mongoose.set("strictQuery" , false);
        mongoose.connect(mongoURI);
        console.log("Connected To MongoBD Successfully");
    }
    catch(error){
        console.log(error);
        process.exit();
    }
}
