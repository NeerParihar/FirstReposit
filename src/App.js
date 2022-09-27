import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

const App=()=>{
  // let[n1,updaten1]=useState(0);
  // let[n2,updaten2]=useState(0);
  // useEffect(function(){
  //   alert("useEffect is Running");
  // },[n1])
  // const show=(e)=>{
  //   if(e.target.name==='n1')
  //   {
  //     updaten1(n1++);

  //   }
  //   else{
  //     updaten2(n2++);
  //   }

  // }
useEffect(function(){
  async function getData(){
    var res= await axios.get("http://restapittt.herokuapp.com/products/");
    console.log(res.data);
  }
  getData();
})


  return(
    <>
      {/* <h1>{n1}</h1><br/>
      <h1>{n2}</h1><br/>
      <button name="n1" onClick={show}>Increase 1st</button>
      <button name="n2" onClick={show}>Increase 2nd</button> */}

      <h1>Axios is Running in App Component</h1>
    </>
  )

}
export default App;
