import React from "react";

function Home ({data}) {
    return (
        data.map((d , i)=>{
            return (
                <P key={d.id}>{d.name} </P>
            )
        })
    )
}
export default Home;