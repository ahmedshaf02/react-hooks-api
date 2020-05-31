import React,{useState,useEffect} from "react";

import "./styles.css";
import GithubSearch from "./GithubSearch"
import Timer from "./Timer"


const Styles = {
  timerBtn:{
border:"0.8px solid black",
padding:"10px 20px",
backgroundColor:"white",
borderRadius:6,
fontSize:18,
margin:10
  }
}
export default function App() {

  const [show,setShow] = useState(true)

  return (
    <div className="App mt-4">
      <h1>react Hook api</h1>
      <GithubSearch/>
      {/* {show?<Timer/>:""} */}
      <button style={Styles.timerBtn} onClick={()=>setShow(true)}>Show</button>
      <button style={Styles.timerBtn} onClick={()=>setShow(false)}>Hide</button>
    </div>
  );
}
