import React, { useState } from 'react'
import "./SingUp.css"
export default function SingUp() {
    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")



    return (
    <>
     <h1 className='Tital'>Sing Up</h1> 
    <div className='Input_Div'>
{/* <p>Name</p>  */}
    <input type="text"   placeholder='Name' className='Input_Filed' value={Name} onChange={(e)=>setName(e.target.value)}/> <br />
     <input type="email" placeholder='Email' className='Input_Filed' value={Email} onChange={(e)=>setEmail(e.target.value)}/> <br /> 
     <input type="password  "  placeholder='Password' className='Input_Filed' value={Password} onChange={(e)=>setPassword(e.target.value)}/> <br />
     <button className='SingUp_Button' onClick={SingUp}>Sing Up</button>
    </div>
    </>
  )
}
