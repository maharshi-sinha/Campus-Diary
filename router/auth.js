const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


require("../db/conn");

const User = require("../model/userSchema");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.get("/", (req,res)=>{
//   res.send("Hellow");
// })

router.post("/register", async (req, res) => {
  res.cookie("jwtoken","vikash");
  const { name, email, skill, ig_username, linkdin, twitter, github , password, cpassword} = req.body;

  if (!name || !email || !skill || !ig_username || !linkdin || !twitter || !github || !password || !cpassword ) {
    return res.status(422).json({ error: "Please Fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "Password Not Matched" });
    }
    const user = new User({ name, skill, email, ig_username, linkdin, twitter, github, password, cpassword });

    
    const saveMethod = await user.save();
    if (saveMethod) {
       
      res.status(201).json({ message: "User registered successfully" });
      
    


      // res.get("/thankyou", (req, res) => {
      //   res.send("thank You for Registration");
      // });

    } else res.status(500).json({ message: "Failed to registered" });
  } catch (err) {
    console.log(err);
  }
});


// Login Router
 
router.post('/signin',async(req,res)=>{
 
try{
 
 let token;
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({error:"Please Fill the data"})
    }
        const userLogin = await User.findOne({email:email})
// res.json({message:"User Signin successfully"})
    

if(userLogin){
    const isMatch = await bcrypt.compare(password,userLogin.password)

 token = await userLogin.generateAuthToken();
 console.log(token);


res.cookie('jwtoken',token,{expires: new Date(Date.now()+25892000000), httpOnly:true });

    if(!isMatch){
      res.status(400).json({error:"Invalid credentials"})
    }
    else{
      res.json({message:"User Signin Successfully"})
    }


}
else{
  res.status(400).json({error:"Invalid Credentials"})
}

}
catch(err){
    console.log(err)
}








})
















module.exports = router;
