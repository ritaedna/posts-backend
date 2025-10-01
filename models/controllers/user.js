const bcrypt = reuire("bcryptjs")
const User = require("../models");

const register = async (req, res) =>{
    const {email, password, confirmpassword firstname, lastname} = req.body
    try {
        const existingUser = await User.findOne({ email });


        if (existingUser) return res.status(404).json({"User already exists"})

        if (password !== confirmPaasword) return res.status(400).json({message:"password miss match"})

            const hashedpassword = await bcrypt.hash(password, 12);

            const result = await User.create({ email, password:hashedpassword, name: ${firstname})

            const token =jwt.sign({emial: SpeechRecognitionResult.email, id: result._id}, 'test', {expiresIn: "1h"});

            
    } catch (error) {

    }
}