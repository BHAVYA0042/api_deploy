import React,{useState} from "react";
function Form(props){
    const [input,setInput]=useState({
        kind:'',
        number:''
    })
    function submitHandler(event){
        event.preventDefault();
        props.onAdd(input)
        // setInput({
        //     kind:input.kind,
        //     number:input.number
        // })
        console.log(input);

        setInput({
            kind:'',
            number:''
        })
    }

    function changeHandler(event){
        const {name,value}=event.target;
        setInput((prevValue)=>{
            return{
                ...prevValue,
                [name]:value                
            };
        })
       
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">Type</label>
                <input type="text" name="kind" onChange={changeHandler} value={input.kind} />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="number" name="number" onChange={changeHandler} value={input.number} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default Form;