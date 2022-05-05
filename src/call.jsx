import React, { useState } from "react";

function Call(){
    const [activity,setActivity]=useState({});
    const[isError,setIsError]=useState(null);
    async function recieve(){
        setIsError(null);
        try{
            const response= await fetch("http://localhost:5000/");
            if (!response.ok){
                throw new Error('Something went wrong')
            }
            const data=response.json()
            const newData={
                key:data.key,
                title:data.activity,
                people:data.participants,
                cost:data.price,
                score:data.accesibility,

            }
            setActivity(newData);
        }
        catch(error){
            setIsError(error.message)
        }
        
    }
    
    return(
        <div>
            <h2>{activity.title}</h2>
            <p>participants</p>
        </div>
    )
}