import React, { useState } from 'react'

export default function Login() {
       const [Email,setEmail] = useState("")
        const [Password,setPassword] = useState("")
        function SingIn() {
            console.warn( "Email =",Email,"Password =",Password);
            
         } 
  return (
    <>
          <h1 className='Tital'>Sing Up</h1> 
    <div className='Input_Div'>
{/* <p>Name</p>  */}
     <input type="email" placeholder='Email' className='Input_Filed' value={Email} onChange={(e)=>setEmail(e.target.value)}/> <br /> 
     <input type="password  "  placeholder='Password' className='Input_Filed' value={Password} onChange={(e)=>setPassword(e.target.value)}/> <br />
     <button className='SingUp_Button' onClick={SingIn}>Sing In</button>
    </div> 
    </>
  )
}
