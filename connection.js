const mongoose=require('mongoose');
const { type } = require('os');


mongoose.connect("mongodb://localhost:27017/Login-tut")
.then(()=>{
    console.log('connection succesful');
})
.catch(()=>{
    console.log('connection failed')
})

const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
});
const BookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
    
});
const collection=mongoose.model("collection",LoginSchema);

module.exports = collection2;
module.exports=collection;//export the model
