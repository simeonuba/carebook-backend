import controllers from "../controllers"; 
import express from "express";
const Router = express.Router()
import flash from 'connect-flash';

Router.get('/register',(req,res)=>{
   
    return res.render('../views/pages/auth/register');
})
Router.get('/login',(req,res)=>{
   
    return res.render('../views/pages/auth/login');
})
Router.post('/register',controllers.auth.regsiter)
Router.post('/login',controllers.auth.login)
Router.get('/',(response,request)=>{
    return response.send('ok');
})
module.exports = Router;