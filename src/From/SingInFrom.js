import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SingInFrom() {
    const navigate = useNavigate()
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const handlerSingIn = async () => {
const auth = getAuth()
signInWithEmailAndPassword(auth,email,password) 
.then((singinUser)=>{
    const user = singinUser.user;
    navigate('/SingUp')
}).catch((erro)=>{
    const erroCode = erro.code;
    const erroMessge = erro.Messge;
    console.log(erroCode,erroMessge);
    
  })
        }
  return (
    <>
      <div className='From_Div'>
      <label >Email : </label>
      <input type="email" value={email}   placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/> 
      <label >Password : </label>
     <div>
     <input type="password" value={password}   placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>  <br />
     <input type="checkbox" name=""   placeholder=''/><span>Accept Website  Contion</span> 
     </div>
      <button  onClick={handlerSingIn} >Sing Up</button>
      <Link  to="/SingUp">You Have No Account</Link>
    </div>
    </>
  )
}
