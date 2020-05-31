
import React, { useState,useEffect } from "react";




const Timer = () => {
  const [time, setTime] = useState(new Date());


  useEffect(
    ()=>{
    // let timer = setInterval(()=>{
    //    setTime(new Date())
    //   console.log("inside useeffect")
    // },1000)
    return ()=>clearTimeout(timer)
  },[]

  )

 useEffect(()=>{
  console.log("time is",time)
 },[time])



  console.log( "render")
  return (
    <>
      <h1>Timer</h1>
      <h4>
        {time.toLocaleString()}
      </h4>
      
    </>
  );
};

export default Timer
