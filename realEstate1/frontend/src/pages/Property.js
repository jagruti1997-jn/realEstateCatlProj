import React, { useState,useEffect } from "react";
import {Link,NavLink,Outlet, useParams,useNavigate} from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import NewPage from "./NewPage";

const Property=()=>{
    
    const {people,token}=useParams()
    
    return (
        <div >

            <div>
            <input type="text" placeholder="Search PPD ID" name="search" className="search"/>
            
            <button style={{width:"30px",height:"30px",marginLeft:"-40px",border:"none",background:"white"}}><IoIosSearch  /></button>
            
            </div>
            
            <div style={{float:"right",marginTop:"-30px"}}>
                <button className="Addpropertybutton">
                   
                    <Link style={{textDecoration:"none"}} to={`/home1/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>+ Add Property
           </Link> 
                    
              </button>
            <Outlet/>
         </div>
        
       
         
        </div>
        
    )
}
export default Property;