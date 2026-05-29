import jwt from "jsonwebtoken";
import User from "../models/user.js";
import mongoose from "mongoose";

const JWT_SECRET_KEY = "some-text-for-json-token-secret";
export async function login(req,res){
    const {email, password} = req.body;

    const user = await User.findOne({ 'email': email, 'password': password });

    if(!user){
        return {
            code: 400,
            token: null,
            message:"User not found"
        };
    }

   const token =  jwt.sign({
        email: user.email,
        role: user.role
    }, JWT_SECRET_KEY, {
        expiresIn: '2m'
    });

    return {
        code: 200,
        token: token,
        user:{
            email: user.email,
            id: user.id,
            role: user.role
        }
    }


}


export async function register(req, res) {
    const { name, email, password } = req.body;

    try {
        if(name == undefined || email == undefined || password == undefined) {
            return {
                code: 400,
                message: "Name, email and password must not be null"
            }
        }

        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            password: password
        });
        await user.save();
    
        return {
            code: 201,
            message: "User is saved successfully"
        }
    } catch(e) {
        console.log(e.message);
        return {
            code: 500,
            message: "Something went wrong"
        }
    }

}


