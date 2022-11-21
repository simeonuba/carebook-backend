import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

 const checkUser = async (data) => {
    return await prisma.users.findUnique({
        where: { email: data},
        select: {
            password: true,	
            email: true,
            fullname: true
        }
    })
}
const registerForm ={
    fullname: 'required|string',
    email: 'required|email',
    password: 'required|min:6'
}
module.exports = {checkUser,registerForm};