import React from "react";
function Loading(Compontent) {
    return function withLoadingCompontent ({isLoading,data})
    {
        if(isLoading){
            return(
                <p>LOADING..</p>
            )
        }else{
          return(
            <Compontent data={data }/>
          );}
        
    } 
}
export default Loading;