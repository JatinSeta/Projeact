import React, { useEffect, useState } from 'react'

export default function UseEffeact() {
    const [count,setCount] = useState(0)
    
    // Every Render Use Effeact 
    useEffect(()=>{
        console.warn("Every Render Scussefully")
    })
    //only one Time Page Reander after tha page
    useEffect(()=>{
        console.warn("Every Render Scussefully")
    },[])
    // Only Change Value to Render  
    useEffect(()=>{
        console.warn("Count Scussefully")
    },[count])
  return (
    <>
      <div>
                <h1>Value = {count}</h1>
                <button onClick={()=>(setCount(count+1))}>Add Value</button>
                <button onClick={()=>(setCount(count-1))}>Remove  Value</button>
                <button onClick={()=>(setCount(0))}>Clear  Value</button>
                <button onClick={()=>(setCount(0))}> Clear</button>
                {/* <button onClick={()=>(setCount(0))}>Cl ea r new</button> */}

      </div>
    </>
  )
}
