import React, { useState } from "react";

export default function StateFun() {
    const [id ,setId] = useState (101);
    const [name , setName] = useState ('abhay');
    const [city , setCity] = useState ('surat');

    const change = () => {
        setId (110);
    } ;
    const changecity = () => {
        setCity ('ahemdabad')
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
<button onClick={() => setName('mohan')}> change name
    </button>
    </div>
    <div>
        {city}
<button onClick={() => changecity()}> change city
    </button>
    </div>
    </>

)
}