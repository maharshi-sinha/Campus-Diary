const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    skill:{
        type:String,
        required:true
    },
    ig_username:{
        type:String,
        required:true
    },
    linkdin:{
        type:String,
        required:true
    },
    twitter:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens :[
        {token:{
            type:String,
            required:true
        }}
    ]
})



userSchema.pre('save',async function(next){
    if(this.isModified ('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});




// we are generating tokens
userSchema.methods.generateAuthToken = async function(){
// userSchema.method("generateAuthToken",async function(){

try{
    let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
}
catch(err){
    console.log(err);
}



} 
const User = mongoose.model('Users',userSchema)
module.exports = User;