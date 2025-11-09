import React, { useState,useEffect, useRef } from "react";

const Practise = () => {
  const [visible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);
//   const ref=useRef(0);

// console.log("🎨 Component re-rendered!");

//   useEffect(()=>{console.log("componented mounted")},[]);

//   useEffect(()=>{console.log("componented Count")},[count]);

//   useEffect(()=>{console.log("Visible Added")},[visible]);

    const refCount=useRef<number |null>(null);

    useEffect(()=>{refCount.current=count},[count])


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>New Count: {count}</h4>

      <h2>Ref Count :{refCount.current}</h2>

      {count > refCount.current ? "Increased":"Decreased"} 

      <button onClick={() => setIsVisible(!visible)}>Touch Me!</button>
      {visible && <p>Hello Vinay!</p>}
      
    </div>
  );
};

export default Practise;
