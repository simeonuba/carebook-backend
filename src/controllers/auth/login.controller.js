import services from "../../services";
const login =  async (req, res)=>{
    const {userMessage,userError,userData} =  await services.auth.login(req.body);
    if(userError){
        return res.status(200).send({
            message: userMessage,
            error: userError,
            data: userData
        })
    }
    return res.status(200).send({
        message: userMessage,
        error: userError,
        data: userData
    })
}

module.exports = login; 