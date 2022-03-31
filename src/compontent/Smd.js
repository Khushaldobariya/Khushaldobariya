import React from 'react';
  
function Smd(props) {
    let arr1=[10,20,30];
    let arr2=[40,50];
    
    // copy
let arr3 =[...arr1];
console.log(arr3);
 // concate
 let arr4 =[...arr1,...arr2]
 console.log(arr4);

 //mergine
 let arr5=[0,...arr4,60];
 console.log(arr5);

 //destructure 
 let arr6=['amit','paetl'];
 let  [fname,lname] = arr6;
// console.log(arr6[0]);
 console.log(fname);


 let obj1 ={fname:"amit",age:24};
 let obj2 ={fname:"meet",age:30};

 //copy
 let obj3 = {...obj1}
 console.log(obj3);

 // concate 
 let obj4 = {...obj1,...obj2}
 console.log(obj4);

 // margine 
 let obj5 ={fname:"amit",age:24,city:'surat'};
 let obj6 ={fname:"meet",age:30};
  let obj7 ={...obj5,...obj6}
  console.log(obj7  );


    return (
        <div>
            
        </div>
    );
}

export default Smd;