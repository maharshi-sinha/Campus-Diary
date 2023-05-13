const mongoose = require("mongoose");
const DB ="mongodb+srv://theneoalpha:Vikash123@cluster0.lqezs6z.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})