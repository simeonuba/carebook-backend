import services from "../../services";

const registerController = async (request, response)=>{
    const {userMessage,userError,userData} = await services.auth.register(request.body);
    if(userError){
        return response.status(200).send({
            message: userMessage,
            error: userError,
            data: userData
        })
    }
    return response.status(200).send({
        message: userMessage,
        error: userError,
        data: userData
    })
}
module.exports = registerController;