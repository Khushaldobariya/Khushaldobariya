
import React from "react"; 

function App(props) {
  let  data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let filterdata = data.filter ((d,index)=>(d.salary > 900 && d.status === true )); 
  let total = filterdata.reduce ((acc,d) =>acc+d.salary+d.bonus, 0);


  console.log(total);
   return (
     
      <table border ="1" style={{textAlign:"center",margin:"20px"}}>
        <h1 > Employlee data</h1>
        <tr>
          <th style={{color: "red",padding:"10px"}} >name</th>
          <th style={{color: "red",padding:"10px"}} >age</th>
          <th style={{color: "red",padding:"10px"}} >salary</th>
          <th style={{color: "red",padding:"10px"}} >bouns</th>
          <th style={{color: "red",padding:"10px"}} >status</th>
          <th style={{color: "red",padding:"10px"}} > salary bouns</th>
          <th style={{color: "red",padding:"10px"}} >total bouns</th>
        </tr>
          {
            filterdata.map ((d,i)=>{
              return(
           <>
               <tr>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.name}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.age}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.salary}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.bonus}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.status.toString()}</td>
                 <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}}>{d.salary+d.bonus}</td>
               {  i === 0 ? <td style={{color: "darkblue ",fontweight:"100",padding:"10px"}} rowSpan={filterdata.length}>{total}</td> : null }
                 </tr>
           </>
              )
            })
          }
          
      </table>
   )
}


export default App;