import React, {useState} from 'react'
import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { LuTag } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import './mix.css'
const NavSidebar = () => {
    const [IsOpen,setIsOpen]=useState(true)
    const Toggle=()=>setIsOpen(!IsOpen)
 
        
    const menuItem=[
        {
            path:"/home/:people/:token",
            name: "Property",
            icon :<RiHome2Line />
        }, {
            path:"/assistance",
            name: "Assistance",
            icon :<FaRegBell />
        }, {
            path:"/recievedinterest",
            name: "Recieved Interest",
            icon :<PiDownloadSimpleFill />

        }, {
            path:"/sentinterest",
            name: "Sent Interest",
            icon :<BiSolidUpArrowCircle /> 
        },
        {
            path:"/propertyviews",
            name: "Property Views",
            icon :<RxEyeOpen />
        },
        {
            path:"/tariffplan",
            name: "Tariff Plan",
            icon :<LuTag />
        },
    ]






  return (
    <div className='navSidebar'> <div style={{width: IsOpen ? "200px" : "50px"}} className="sidebar">
    <div className="top_section">
        <h1 style={{display: IsOpen ? "block" : "none"}} className="logo">Logo</h1>
        <div style={{marginLeft: IsOpen ? "60px" : "0px"}}className="bars">
            <FaBars onClick={Toggle}/>
        </div>

    </div>
    {
        menuItem.map((item,index)=>( 
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">{item.icon} </div>
                <div style={{display: IsOpen ? "block" : "none"}} className="link_text">{item.name} </div>


            </NavLink>


        ))
    }
</div></div>
  )
}

export default NavSidebar