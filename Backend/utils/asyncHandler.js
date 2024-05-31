const asyncHanlder=(requestHandler)=>{
    return async ()=>{
        try{
            await requestHandler();
        }catch(error){
            console.log(error);
        }
    }
}
export {asyncHanlder};