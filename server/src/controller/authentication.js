const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")

const Login = (req,res) => {
    console.log(req.body);
    const {email, password} = req.body;

    res.send(email, password);
}

const Register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashpwd = await bcrypt.hash(password, salt);
        const user = new User({
            username, email, password:hashpwd
        })
        await user.save();

        return res.json({message: "Register Successful!"})
    }catch(err){
        console.log(err)
    }
}

module.exports= {
    Login, Register
}