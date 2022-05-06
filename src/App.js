import React,{Fragment, useState} from "react";

import Acti from "./activity";
import Form from "./Form";


function App(){
  const [acti,setActi]=useState({});
  const [isLoading,setIsLoading]=useState(true);
  const[isError,setIsError]=useState({
    condition:false,
    message:""
  });
  async function sendReq(info){
    setIsLoading(true);
    const response=await fetch("http://triall-deploy.herokuapp.com/",{
      method:'POST',
      body:JSON.stringify(info),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data=await response.json()
    console.log(data);
    if(Object.keys(data).length===0){
      setIsError({
        condition:true,
        message:"No activity found with the specified parameters"
      })
    }
    else{
      setActi(data)
      setIsError({
        condition:false,
        message:""
      })
    }
    
    setIsLoading(false);
  }
  return(
    <Fragment>
      <Form onAdd={sendReq}/>
      {!isLoading && !isError.condition && <Acti info={acti}/>}
      {!isLoading && isError.condition && <p>{isError.message}</p>}
  
    </Fragment>
  )
}

export default App;
