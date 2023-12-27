import React ,{useEffect}from "react";
import {Link,NavLink,Outlet, useParams,useNavigate} from 'react-router-dom';
import "./pages.css"
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import NavSidebar from "../components/NavSidebar";


const NewPage=()=>{
   const navigate=useNavigate()
    const{people,token}=useParams()
   localStorage.setItem('token',token)

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])


    return (
       <div className="pageContainer">
        <div>
         <NavSidebar/>
         </div> 
        
        <div className="newPageContainer" >
           
         <h4 style={{marginTop:"20px",marginLeft:"20px", color:"white", backgroundColor:"skyblue"}}>USER ID:{people}</h4>
       
<h2 style={{marginTop:"40px",fontStyle:"normal",color:"skyblue",borderBottom:"1px solid skyblue",margin:"17px"}}>ADD NEW PROPERTY</h2>

 <nav className='navigationbar' >
<ul >
    <li><NavLink to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>basic Info</NavLink> </li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertyDetails`}>Property Details</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalInfo`}>General Info</NavLink></li>
    <li><NavLink  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/locationinfo`}>Location Info</NavLink></li>
    
</ul>
</nav>
<Outlet/>
   </div>
   </div>
    )
}
export default NewPage;