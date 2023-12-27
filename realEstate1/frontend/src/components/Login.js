import React, { useEffect, useState } from 'react'
import {NavLink,Link, useParams, Outlet} from 'react-router-dom'
import "./mix.css"

import 'primeicons/primeicons.css'
import { useNavigate } from 'react-router-dom'
const imgage =require("./icon.webp")
const Login = () =>{

    const [passShow,setPassShow]=useState(false)
    const [formerror,setFormError]=useState({});
    const [isSubmit,setSubmit]=useState(false)
    const [data,setdata]=useState("")
    let navigateTo=useNavigate();
    const [inpval,setInpVal]=useState({
        email:"",
        password:""
        
    });
    const setVal= (e)=>{
        const {name,value}=e.target;
        setInpVal(()=>{
           return{
               ...inpval,
               [name]:value
           }
        })
       };

       const validateForm=(values)=>{
       const errors={};
       const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(!values.email){
        errors.email="email is required"
       }else if(!regex.test(values.email)){
        errors.email="this is not a valid email format"
       }
       if(!values.password){
        errors.password="password is required"
       }
       return errors;
       }

const loginUser=(e)=>{
    e.preventDefault()
     setFormError(validateForm(inpval))
     setSubmit(true)
    const {email, password}=inpval;
    fetch("http://localhost:8000/signin/login", {
        method: "POST",
        body: JSON.stringify(inpval),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((res) =>  { 
setdata(res)
        if(res.status==="success"){
            const token=res.token
            alert("logged in successful")
            localStorage.setItem('jsonwebtoken',`test ${token}`)
          
            navigateTo(`/home/${encodeURIComponent(res.people)}/${encodeURIComponent(token)}`,{state:token})
        }else{
           
            
        }
    })
   
   

}





    return(
<>
<div className='loginContainer'>
    
    <div className='form_data'>
        
     <div className='form_heading'>
        <h2>Logo</h2>
     </div>

     <form onSubmit={loginUser}>
        <div className='form_input'>
           
            <input type='email'name='email'value={inpval.email} onChange={setVal} id='email' placeholder='User ID'></input>

        </div>
          <p style={{color:"red"}}>{formerror.email}</p>
        <div className='form_input'>
            
            <div className='two'>
            <input type={!passShow ?'password':"text"} value={inpval.password} onChange={setVal} name="password" id='password' placeholder='Password'></input>
            <span className='showpass' onClick={()=>setPassShow(!passShow)}>
                {!passShow ? <i className='pi pi-eye'></i>:<i className="pi pi-eye-slash"></i>}
            </span>
            
            </div>
           </div>
           <p style={{color:"red"}}>{formerror.password}</p>
           <button className='btn'>
            
            Login</button>
           <button className='btn' ><Link style={{color:"whitesmoke"}} to={"/register"}>Sign up</Link></button>
           <p>Don't have an Account? <NavLink to='/register'>Sign Up</NavLink></p>
     </form>
<Outlet/>

     {
            data.status === "success" && <div style={{ color: "green" }}> Logged In Successfuly</div>
        }{
            data.status === "failed" && <div style={{ color: "red" }}>lLogged In  Failed</div>

        }
    </div>
</div>
</>
    )
}
export default Login;
