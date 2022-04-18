
import React, { useEffect, useState } from "react"; 
import Smd from "./compontent/Smd";
import City from "./container/City";
import Country from "./container/Country";
import State from "./container/State";
import StateFun from "./container/Statefun";
import Counter from "./container/Counter";
import Clock from "./container/Clock";
import Clockfun from "./container/Clockfun";

function App(props) {
 const HomeWithLoading =Loading(Home);
const [Loading , setLoading] = useState (false)
const [data , setData] = useState([])

  const  userdata =
    [
     {
       id: 101,
       name: 'Abacavir',
       quantity: 25,
       price: 150,
       expiry: 2022,
       status: true
      },
      {
       id: 102,
       name: 'Eltrombopag',
       quantity: 90,
       price: 550,
       expiry: 2021,
       status: true
     },
     {
       id: 103,
       name: 'Meloxicam',
       quantity: 85,
       price: 450,
       expiry: 2025,
       status: false
     },
     {
       id: 104,
       name: 'Allopurinol',
       quantity: 50,
       price: 600,
       expiry: 2023,
       status: true
     },
   ];
   useEffect (
     () => {
       setLoading(ture)
      setTimeout(() => {setLoading(false); setData()},2000)

     }
   )

    return (
      
      <>
       <div>
<HomeWithLoading 
isLoading ={Loading}
data ={data}
/>
       </div>
      </>
    )

  
}


export default App;