import React,{useContext,createContext,useState} from "react";
const context= createContext(null);
const initial=10;
export function Welcome()
{
    
// const context= createContext(null); 
    
    const [state,setState]=useState(initial);
  const obj={state:state,setState:setState}
    return(
<div>
    <div>
        welcome
        <context.Provider value={obj}>
            <Child/>
        
        </context.Provider>
        
    </div>
    {/* <div>
       

    </div> */}
</div>
    )
    
}
export function Child(){
    return(
        <div>
            <Mygrandchild/>

        </div>
    )
}

const Mygrandchild=()=>{
    const {state,setState} = useContext(context);
    const increment=()=>{
        setState(state+1);
    };
    return(
        <div>
            <button onClick={increment}>increment {state}</button>
        </div>

    )
}