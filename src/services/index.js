import RegisterService from "./authentication/registerService";
import loginService from "./authentication/loginService";
const services = {
    auth: {register: RegisterService,login: loginService}
}
export default services;