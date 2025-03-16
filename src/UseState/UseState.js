import React, { useState } from 'react'

export default function UseState() {
  const [fruits,Setfruits] = useState("Apple")

  const NameChange = () => {
    Setfruits("Kiwi")
    
  }
  return (
    <>
    <h1>{fruits}</h1>  
    <button onClick={NameChange}>Name Change</button>
    </>
  )
}
