import React from 'react';
import {  NavLink } from 'react-router-dom';
import '../App.css'
export default function NavBar({children}){
    return ( <> 
    <div>

<nav className='app-nav' >
<ul >
    <li ><NavLink class = {({isActive})=>{ return isActive ?
'index-link':''
    }} to="/">Index</NavLink> </li>
    <li><NavLink class = {({isActive})=>{ return isActive ?
'home-link':''
    }} to="/home">Home</NavLink></li>
</ul>
</nav>
{children}
</div>

</> )
}