import User from '../models/authModel.js';



const registerController = async (req,res)=>{
    const { username, email, password } = req.body;
    if(!username || !email|| ! password ){
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = new User({
        username,
        email,
        password: User.hashPassword(password)
    });
    const token = await user.generateAuthToken();
    res.json({ user, token });

    await user.save();
};
const loginController = async (req,res)=>{
    const {email ,password} = req.body;
    if(!email || !password){
        return res.status(400).json({ message: "All fields required" });
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({ message: "Invalid User" });
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.json({ message: "Invalid Password" });
    }
    const token = await user.generateAuthToken();
    res.json({ user, token });
    return res.json({ message: "Login successful" });

};

export default {
    registerController,
    loginController
};