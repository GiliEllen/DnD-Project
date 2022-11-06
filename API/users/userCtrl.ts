import express  from 'express';
import { UserModel, UserValidation } from './userModel';

export async function register(req:express.Request, res:express.Response) {
    try {
        const {username, email, password, rePassword} = req.body;
        if(!username || !email || !password || !rePassword) throw new Error("No information from user on /api/register")
        const { error } = UserValidation.validate({ email, username, password, confirmPassword: rePassword });
        if (error) throw error;
        const userDB = await new UserModel({ email, password, username });
        await userDB.save();
        res.send({ register: true, userDB });
        
    } catch (error) {
        res.send({error: error})
    }
}
