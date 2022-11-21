import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import verify from '../../shared';
import Validator from 'validatorjs';

const hashPassword = async (data)=>{
       const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(data,salt);
}

let registerForm ={
   fullname: 'required|string',
 email: 'required|email',
 password: 'required|min:6'
 };
const RegisterService = async (data) => {
   let validation = new Validator(data,registerForm);
    if(validation.passes()){
 try {
       const {email} = data;
       const newUser = await verify.checkUser(email);
       if(newUser){
        return {
            userMessage: 'Account Already in use',
            userError: true,
            userData: {},
        }
       } 
       const password = await hashPassword(data.password);
       const createNew = {
        fullname: data.fullname,
        email: email,
        password: password,
        pin: data.pin
     }
     if(createNew.fullname == "" && createNew.email== "" && createNew.password==""){
      return {userMessage: 'Fill all fields', userError: true, userData:{}}
     }
     const register = await prisma.users.create({ 
        data: createNew,
     })
     if(!register){
        return {userMessage: 'Error Creating User', userError: true, userData:{}}
     }
     return {userMessage: 'Account created successfuly',userError: false, userData:{}}

 } catch (err) {
    const {message} =err
    return {userMessage: message, userError:true, userData:{}};
 }
}else{
   const message= {
      message: 'All field are required',
   }
  
   return {userMessage: [validation.errors.errors.fullname, validation.errors.errors.password,validation.errors.errors.email], userError:true, userData:{}};

}

}
export default RegisterService;