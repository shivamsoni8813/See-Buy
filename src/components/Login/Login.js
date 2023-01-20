import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Login.css'

function OneMore() {

  // using state for implemanting my logics

  const [name, setname]=useState('')
  const [email, setemail]=useState('')
  const [password, setpassword] = useState('')
  const [login, setlogin] = useState(false)
  const [signup, setsignup] = useState(false)

  // getting items from localstorage

  let localname = localStorage.getItem("Name")
  let localemail = localStorage.getItem("email")
  let localpass = localStorage.getItem("password")

  // using Usenavigate hook for sending user to the landing page


  let navigate = useNavigate()
  

 

  // this api is work only for 20 days and because of it i use localstorage for signin and signup
  
  // const handleClick = async() =>{
  //    let input = {email, password}
  //    console.log(input)
  //    let baseUrl = "https://api.escuelajs.co/api/v1/auth/login"
  //    let {data} = await axios.post(baseUrl,input)
  //    localStorage.setItem("token", data.access_token)
  //    localStorage.setItem('email', email)
  //    // window.location.href = '/'
  //    setlogin(true)
  //    console.log(data)


  // }

// new custom click function for varification

const handleClick = ()=>{
  if ((email === localemail) && (password === localpass)  ) {
    setlogin(true)
    navigate("/")
   
  }
  else{
    alert("wrong cradential")
  }
}

// toggle switch for signin and signup 

const signupClick = () =>{
  setsignup(!signup)
  }
  
  // implemanting signup functionality
  
  const handlesignup = ()=>{
    let signupinput = {name,email, password}
    localStorage.setItem("Name", name)
    localStorage.setItem("password", password)
    localStorage.setItem("email", email)
    console.log(signupinput)

  }

  return (
    <>
    <NavBar/>
    <div className="login">
      <div className="loginbox">

      <div className='imageOfLogin'></div>
      <div className="auth-container">
        <h1 className='LoginHeader'>Welcome to login...</h1>
        <div className="row">
          <div className="col-12">
            
              {
                signup ? 
                
              <div className="login-input">
                <input type="text" className='login-form-control' placeholder='enter username' onChange={(e)=>setname( e.target.value)} required/>
                <input type="email" className='login-form-control' placeholder='enter useremail' onChange={(e)=>setemail( e.target.value)} required/>
                <input type="password" className='login-form-control' placeholder='enter password' onChange={(e)=>setpassword( e.target.value)} required/>
                
            </div>
                : 
                <div className="login-input">
                <input type="email" className='login-form-control' placeholder='enter useremail' onChange={(e)=>setemail( e.target.value)} required/>
                <input type="password" className='login-form-control' placeholder='enter password' onChange={(e)=>setpassword( e.target.value)} required/>
                </div>
              }
              

            <div className="submit btn btn-primary" onClick={()=> signup ? handlesignup() : handleClick()}>{signup ?"signup" : "Login"}</div>

            <div className="info">Please SignUp ? 
            <button onClick={signupClick} className='signupButton' > { signup ? "SignIn" : "SignUp"}</button></div>
          </div>
        </div>
      </div>
    
      </div>
    </div>
    </>
  )
  }


export default OneMore
