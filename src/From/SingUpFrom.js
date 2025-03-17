import React, { useState } from 'react'
import "./From.css"
import auth from "../From/Fierbase"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
export default function From() {
  const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const headelLogin = async () => {
      
      // e.preventDefault()
  const auth = getAuth()
 createUserWithEmailAndPassword(auth,email,password)
      .then((createUser)=>{
        navigate('/')
        const user = createUser.user
        // console.log(user);
        
      }).catch((erro)=>{
        const erroCode = erro.code;
        const erroMessge = erro.Messge;
        console.log(erroCode,erroMessge);
        
      })
      
    }
    // console.log(headelLogin);
    
  return (
    <div className='From_Div'>
       <label >Name : </label> 
      <input type="text"  value={name}   placeholder='Name'  onChange={(e)=>setName(e.target.value)}/>
      <label >Email : </label>
      <input type="email" value={email}   placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/> 
      <label >Password : </label>
     <div>
     <input type="password" value={password}   placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>  <br />
     <input type="checkbox" name=""   placeholder=''/><span>Accept Website  Contion</span> 
     </div>
      <button  onClick={headelLogin} >Sing Up</button>
      <Link to="/">You Have  Account</Link>
    </div>
  )
}
