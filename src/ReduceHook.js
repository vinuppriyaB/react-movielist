
import { IndeterminateCheckBoxOutlined } from "@mui/icons-material";
import {useReducer}from "react";
import {useState} from "react";
import { ColorBox } from './ColorBox';

const initialState={count:10,colorbox:"black"}
const reducer=(state,action)=>{
  switch(action.type){
    case"increment":
    return{count:state.count+1};
    case"decrement":
    return{count:state.count-1};
    case"reset":
    return{count:action.payload};
    case"changeColor":
    return{colorbox:action.payload};
    
    default:
      return state;
  }
}

export  function ReduceHook() {
  const [state,dispatch]=useReducer(reducer,initialState);
  const [color,setColor]=useState([]);
  // const iterate=()=>color.map((clr) => (<ColorBox color={clr} />
  //   ))
  return (
    <div className="App">
      <h1>Count is:{state.count} color:{state.colorbox}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"reset",payload:0})}>reset</button>
      <input
        value={color}
        style={{backgroundColor:color}}
        onChange={(event) => setColor(event.target.value)}
        placeholder="enter color" />
      <button  
      onClick={()=>
        dispatch({type:"changeColor",payload: <ColorBox color={color}/>})}> 
      Add color</button>
      
        
      
        </div>
  );
}



