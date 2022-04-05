import React, { useState } from "react";

export default function StateFun() {
    const [id ,setId] = useState (101);
    const [name , setName] = useState ('abhay');

    const change = () => {
        setId (110);
    } 
    
    return (
        <>
    <div>
        {id}
<button onClick={() => change()} > change id
    </button>
    </div>
    <div>
        {name}
<button onClick={() => setName('mohan')}> change id
    </button>
    </div>
    </>

)
}