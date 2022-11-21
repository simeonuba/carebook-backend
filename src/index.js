import config from './config';
import router from './routes';
const StartApp = (app)=>{
    config.main.middleWare(app);
    router(app);
}

export default StartApp;