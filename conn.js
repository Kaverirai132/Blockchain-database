const mongoose = require("mongoose");

exports.connectMongoose = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/crypto-network").then(() => {
        console.log(" connection successful");
    }).catch((e)=>{
        console.log(" no connection");
    });
}

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    cnfrmpassword: String,
})

exports.User = mongoose.model("Client",userSchema);