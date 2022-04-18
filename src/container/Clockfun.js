import React, { useEffect, useState } from "react";

 function Clockfun(props) {
     const [time , setTime ] = useState (new Date);
     
     const tick  = () => {
         setTime (new Date ());
        
        
        useEffect (
            () => {
                const timeID = setInterval (() => tick() ,1000);
                
                return () => {
                    clearInterval (timeID);
                }
            },
            
            [time]);
            
        }
    
     return (
         <div>
             {time.toLocalTimeString()}
         </div>
     );

 }
      
     export default Clockfun;