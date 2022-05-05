import React from "react";
function Acti(props){
    return(
        <div>
            <h1>{props.info.title}</h1>
            <p>It will cost you {props.info.cost}</p>
            <p>The accessibility score is {props.info.score}</p>
        </div>
    )
}
export default Acti;