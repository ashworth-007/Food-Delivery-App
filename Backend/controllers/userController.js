// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import validator from "validator"
// import { response } from "express";
// import dotenv from "dotenv";
// dotenv.config();


// //login user
// const loginUser = async (req,res)=>{
//     const {email,password}=req.body;
//     try {
       
//         console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging
        
//         const user =await userModel.findOne({email});
//         if (!user) {
//             return res.json({success:false,message:"User Doesn't exists"})
//         }
//         const isMatch= await bcrypt.compare(password,user.password)

//         if (!isMatch) {
//             return res.json({success:false,message:"Invalid Credentials"})
//         }
//         const token=createToken(user._id);
//         res.json({success:true,token})


//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// const createToken=(id)=>{
//     if (!process.env.JWT_SECRET) {
//         throw new Error("JWT_SECRET is not defined");
//     }
//     const secret = process.env.JWT_SECRET || "fallback_secret_key";
//     return jwt.sign({id},secret);
// }

// //register user
// const registerUser = async (req,res)=>{
//     const {name ,password,email}=req.body;
//     try {
//         //checking use exits or not
//         const exists=await userModel.findOne({email});
//         if(exists){
//             return res.json({success:false,message:"User already exists"})
//         }
//         // validateing email and password
//         if(!validator.isEmail(email)){
//             return res.json({success:false,message:"Please Enter a valid E-mail"})
//         }
//         if(password.length<8){
//             return res.json({success:false,message:"Please enter a strong password"})
//         }

//         //hashing user password
//         const salt= await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password,salt);

//         const newUser = new userModel({
//             name:name,
//             email:email,
//             password:hashedPassword
//         })

//         const user = await newUser.save()
//         const token= createToken(user._id)
//         res.json({success:true,token})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export {loginUser,registerUser};



import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

dotenv.config();

// Passport Local Strategy
passport.use(
    new LocalStrategy(
        { usernameField: "email", passwordField: "password" },
        async (email, password, done) => {
            try {
                const user = await userModel.findOne({ email });
                if (!user) {
                    return done(null, false, { message: "User doesn't exist" });
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return done(null, false, { message: "Invalid Credentials" });
                }

                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Login Route
const loginUser = (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
        if (err) {
            return res.json({ success: false, message: "Error occurred", error: err });
        }

        if (!user) {
            return res.json({ success: false, message: info.message });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "fallback_secret_key", {
            expiresIn: "1d",
        });

        res.json({ success: true, token });
    })(req, res, next);
};

// Register User Route (Unchanged)
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Checking if the user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validating email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a valid E-mail" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "fallback_secret_key", {
            expiresIn: "1d",
        });

        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { loginUser, registerUser };
