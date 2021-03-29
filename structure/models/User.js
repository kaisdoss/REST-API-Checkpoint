const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,require:true,unique:true},
    age:{type:Number},
    phone:{type:Number},
    working:{type:Boolean},
});

module.exports=mongoose.model('User',userSchema);