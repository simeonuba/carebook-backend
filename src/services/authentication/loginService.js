import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import verify from '../../shared';

const loginService = async (data) =>{
    const {email} = data;
    const isUser = await verify.checkUser(email);
    
    if(!isUser){
       return {userMessage: 'User not Found!',userError: true, userData:{}}
    }
    const checkPassword = await bcrypt.compare(data.password,isUser.password);
    if(!checkPassword){
        return {userMessage: 'password incorrect',userError: true, userData:{}}
    }
    const userToken = await jwt.sign({email:data.email},'Scerity', { expiresIn: '1h' } )
     return {userMessage: userToken,userError: false, userData:{}}

}
export default loginService;