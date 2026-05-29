import { login as loginService, register as registerService } from "../services/auth.service.js";
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = "some-text-for-json-token-secret";
export async function login(req,res){
    const loggedIn = await loginService(req, res);
    
    res.status(loggedIn.code).json(loggedIn);
}


export async function register(req,res){
    const registered = await registerService(req, res);
    
    res.status(registered.code).json(registered);
}


