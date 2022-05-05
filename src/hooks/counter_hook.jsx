import React, { useEffect,useState } from "react";
function useCounter(forwards=true){
    const [num,setNum]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(forwards){
                setNum((prevNum)=>prevNum+1)
            }
            else{
                setNum((prevNum)=>prevNum-1)
            }

        },1000);
        return ()=> clearInterval(interval)

    },[forwards])
    return num;
}

export default useCounter;