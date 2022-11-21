import registerController from './auth/register.controller';
import login from './auth/login.controller'
const controllers = {
    auth: {regsiter: registerController,login: login}
}

export default controllers;