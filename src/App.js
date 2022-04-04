
import React from "react"; 
import Smd from "./compontent/Smd";
import Country from "./container/Country";
import State from "./container/State";

function App(props) {
   let  Medicine_Data =
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
     {
       id: 105,
       name: 'Phenytoin',
       quantity: 63,
       price: 250,
       expiry: 2021,
       status: false
     }
   ];
   let filterdata = Medicine_Data.filter((d,i)=>( d.price > 200 && d.expiry > 2021))
   let total = filterdata.reduce(( acc,d,i)=> acc+d.price ,0);
   
    return (
      
      <>
      <Smd />
      <State />
      <Country />
      {/* <table border = "1" > 
        <h1 style={{color:"blue"}}> Medicine Data</h1>
        <tr>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>expiry</th>
          <th>status</th>
          <th>total price</th>
        </tr>
        {
          filterdata.map((d,i)=>{
            return(
              <>
               <tr>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}></td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.quantity}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.price}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.expiry}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.status.toString()}</td>
                 {  i === 0 ? <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}} rowSpan={filterdata.length}>{total}</td> : null }
      
                 </tr>
           </>
            )
          })
        }
      </table> */}
      </>
    )

}


export default App;