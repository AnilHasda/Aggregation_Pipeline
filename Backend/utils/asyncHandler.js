const asyncHanlder=(requestHandler)=>{
    return async (req,resp)=>{
        try{
            await requestHandler(req,resp);
        }catch(error){
            console.log(error);
        }
    }
}
export {asyncHanlder};