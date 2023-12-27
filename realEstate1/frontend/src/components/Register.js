import React ,{useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import './mix.css'
import 'primeicons/primeicons.css'
import { FaDivide } from 'react-icons/fa'

const Register = () => {
  

   
    const [passShow,setPassShow]=useState(false)
    const [cpassShow,setcPassShow]=useState(false)

    const [formerror,setFormError]=useState({});
    const [isSubmit,setSubmit]=useState(false)

    const [inpval,setInpVal]=useState({
        email:"",
        password:"",
        Cpassword:""
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
        if(!values.Cpassword){
            errors.Cpassword="conform password is required";
           }
        return errors;
        }

   

const handleRegister=(e)=>{
    e.preventDefault()
    setFormError(validateForm(inpval))
    setSubmit(true)
    console.log(inpval)
    fetch("http://localhost:8000/signup/register", {
        method: "POST",
        body: JSON.stringify(inpval),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((res) => alert("register succesful"))
}
 return(
<>
<div className='loginContainer'>
    <div className='form_data'>
     <div className='form_heading'>
        <h1>Sign Up</h1>
        <p>Create New Account</p>
     </div>

     <form onSubmit={handleRegister}>
        <div className='form_input'>
           
            <input type='email' value={inpval.email} onChange={setVal} name='email' id='email' placeholder='Mail ID'></input>

        </div>
        <p style={{color:"red"}}>{formerror.email}</p>
        <div className='form_input'>
            
            <div className='two'>
            <input type={!cpassShow ?'password':"text"} value={inpval.password}
             onChange={setVal}  name="password" id='password' placeholder='Password'></input>
            <span className='showpass' onClick={()=>setcPassShow(!cpassShow)}>
                {!cpassShow ? <i className='pi pi-eye'></i>:<i className='pi pi-eye-slash'></i>}
            </span>
            </div>
        </div>
        
        <p style={{color:"red"}}>{formerror.password}</p>
        <div className='form_input'>
            <div className='two'>
            <input type={!passShow ?'password':"text"} value={inpval.Cpassword} onChange={setVal}  name="Cpassword" id='Cpassword' placeholder='Conform Password'></input>
            <span className='showpass' onClick={()=>setPassShow(!passShow)}>
                {!passShow ? <i className='pi pi-eye'></i>:<i className='pi pi-eye-slash'></i>}
            </span>
            </div>
            </div>
            <p style={{color:"red"}}>{formerror.Cpassword}</p>
           <button className='btn' onSubmit={handleRegister}>Sign up</button>.         
           <p><NavLink to='/'>Sign in</NavLink></p>
           
     </form>
    </div>
</div>
</>
    
  )
}

export default Register;
