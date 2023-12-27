import React, { Children, useCallback, useEffect, useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { RxEyeOpen } from "react-icons/rx";
import { LuTag } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "primeicons/primeicons.css"
import "./home.css"
import NavSidebar from "./NavSidebar";
import { NavLink, useParams ,Outlet,useNavigate,useLocation, Link, Navigate} from "react-router-dom";
const SideBar=({children})=>{
    const {people,token}=useParams()
    const [IsOpen,setIsOpen]=useState(true)
    const [peopleList, setPeopleList] = useState([])
    
    const navigate=useNavigate();
    const location = useLocation();
    const ID=location.state
    console.log(ID)

    const [query, setQuery] =useState("");
   
    useEffect(()=>{
        getImage()
      },[]) 


    
const logoutHandle=()=>{
    
    navigate("/")
}
 
 const Toggle=()=>setIsOpen(!IsOpen)
 const getImage=async()=>{
    try{
    const result=await fetch(`http://localhost:8000/posts/`,{
      method: 'GET',
      headers: {
             "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization":`test ${token}`
      },
    }).then((response) => response.json()).then((value) => {
   setPeopleList(value.posts)
        
      })} catch (error) {
         console.error('Error during retrieve image:', error);
        // setResponse(null); // Clear any previous response
       }
  }      
    
    return (
        <div className="container1">
            <NavSidebar/>
           

           <div className="homeContainer">
            
            
                <div className="id">
                <p>USER ID:<span>{people}</span></p>
               
                {/* <div className="logoutBtn"> */}
               <button  onClick={logoutHandle}>Logout</button>
              </div>
              
            
            <div className="id2">
                <div>
            <input type="text" placeholder="Search PPD ID"   onChange={(e)=>setQuery(e.target.value)} name="search" className="search"/>
           <button ><i className="pi pi-search"/></button>
           </div>
            <button className="Addpropertybutton" >
                   
                    <Link  to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`}>+ Add Property
           </Link> 
                    
              </button>
              </div>
             
              <h4>Property details :-</h4>

        <table  >
               <thead>
                   <tr>
                       <th>PPD ID</th>
                       <th>Image</th>
                       <th>Property</th>
                       <th>Contact</th>
                       <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>

                       <th>Days Left</th>
                       <th>view</th>
                       <th>edit</th>
                   </tr>
               </thead>
               {peopleList.filter(val=>{
                  if(query===""){
                   return val;
                  }else if(val._id.includes(query)){
                   return val  }
               }).map(val=> (  <tr>
                       <td >{val._id}</td>
                       <td style={{width:"100px",height:"80px"}}><img src={`/images/${val.image}`} alt="img" height={"50px"} width={"60px"}/></td>
                     <td>{val.PropertyType}</td>
                     <td>{val.Mobile}</td>
                     <td>{val.TotalArea}</td>
                       <td>{val.Lift}</td>
                       <td>{val.status}</td>
                       <td>{val.PPDPackage}</td>
                       <td><button style={{ backgroundColor: "skyblue" }} onClick={()=>navigate(`/showPage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${val._id}`,{state: val})}><i className='pi pi-eye'></i></button></td>
                       <td><button style={{ backgroundColor: "skyblue" }} onClick={()=>navigate(`/editPage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/${val._id}`,{state: val})}><i className='pi pi-file-edit'></i></button></td>
                   </tr>
               ))
               }
           </table>     
            <Outlet/>

            </div>
        </div>
    )
}
export default SideBar;