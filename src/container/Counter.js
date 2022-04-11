import React, { useState } from 'react';

export default  function counter(props) {
    const [ count , setCount] = useState (20)
    const incrementCounter =  () =>{
        setCount (() => count + 1)
    }
    const decrementCounter = () =>{
        setCount (() => count -1)
    }
    return (
        <div>
            <button onClick={() => incrementCounter ()}>+</button>
            <span>{count}</span>
            <button onClick={() => decrementCounter ()}>-</button>
        </div>
    );
}

