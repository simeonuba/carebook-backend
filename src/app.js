import express  from 'express';
import StartApp from './index'
const app = express();
StartApp(app);
const PORT = process.env.PORT || 1200;
app.listen(PORT,()=>{
    console.log('careBook Server started')
})