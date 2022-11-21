import {checkUser,registerForm} from './validation/authverify';

const verify = {
    checkUser: checkUser,
    forms: {register: registerForm},
}

export default verify;