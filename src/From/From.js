import React, { useState } from 'react'
import "./From.css"
import auth from "../From/Fierbase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default function From() {
    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const headelLogin = async (e) => {
      
      e.preventDefault()
      return createUserWithEmailAndPassword(auth,Email,Password)
      .then((createUser)=>{
        const user = createUser.user
        console.log(user);
        
      }).catch((erro)=>{
        const erroCode = erro.code;
        const erroMessge = erro.Messge;
        console.log(erroCode,erroMessge);
        
      })
      
    }
    console.log(headelLogin);
    
  return (
    <div className='From_Div'>
       <label >Name : </label> 
      <input type="text"  value={Name}   placeholder='Name'  onChange={(e)=>setName(e.target.value)}/>
      <label >Email : </label>
      <input type="email" value={Email}   placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/> 
      <label >Password : </label>
     <div>
     <input type="password" value={Password}   placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>  <br />
     <input type="checkbox" name=""   placeholder=''/><span>Accept Website  Contion</span> 
     </div>
      <button  onClick={headelLogin} >Sing Up</button>
    </div>
  )
}
