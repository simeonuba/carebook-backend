import unprotectRouter  from "./unprotected";
const router = (app) =>{
    app.use(unprotectRouter);
}


export default router;