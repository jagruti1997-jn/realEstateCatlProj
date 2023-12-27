import React, { useState } from 'react'

import { Outlet } from 'react-router'
import { Link,useParams,useNavigate,useLocation} from "react-router-dom";
import PropertyDetails from './PropertyDetails'
import "./pages.css"
export default function BasicInfo() {
  let navigateTo=useNavigate();
  const location = useLocation();
  const ID=location.state
  const {people,token}=useParams()
  const [form, setForm] = useState({
     PropertyType: "house",
     Negotable:"1" ,
     Ownership:"select Ownership",
     PropertyAge:"select Property Age",
     PropertyApproved:"select Property Approved",
     BankLoan:"select Bank Loan",

    })
    const [data, setData] = useState("")
    const[toggle,settoggle]=useState(false)
    const submitData = (e) => {
      e.preventDefault()
     console.log(form)
    fetch(`http://localhost:8000/posts/`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":`test ${token}`
        }
    }).then((res) => res.json()).then(
        (data) => {
            setData(data)
            settoggle(!toggle)
        //     const people=data.people
        // const token=data.token
       
        localStorage.setItem('jsonwebtoken',`test ${token}`)
        const postsID=data.postsId
        localStorage.setItem('postsID',`${postsID}`)
        console.log(people,token)
        console.log(postsID)

        if(data.status==="success"){
          alert( JSON.stringify(form))

          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertyDetails`,{state: postsID})
        }else{
          alert("data is not gone into database")

        }


  })
}



//fetchData
  return (
    <div className='container'>
    <form onSubmit={submitData} encType="multipart/form-data" >      
       <div className='content'>
         <div className="input-box">
           <label for="PropertyType" className="details">Property Type</label>

           <select name="PropertyType" id="PropertyType" placeholder="select Property Type" onChange={(e) => setForm({ ...form, PropertyType: e.target.value })}>
             <option value="house">House</option>
             <option value="flat">Flat</option>
             <option value="plot">Plot</option>
             <option value="other">Other</option>
           </select>
         </div>

         <div className="input-box">
           <label for="Negotable" className="details">Negotable</label>

           <select name="Negotable" id='Negotable' placeholder="select Negotable" onChange={(e) => setForm({ ...form, Negotable: e.target.value })} >
             <option value="select Negotable">select Negotable</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="other">Other</option>
           </select>
         </div>
         <div className='input-box'>
           <label for="Price" className='details'>Price</label>

           <input name='Price' id='Price' placeholder='Example:10000' onChange={(e) => setForm({ ...form, Price: e.target.value })} />
         </div>

         <div className='input-box' >
           <label for="Ownership" className='details'>Ownership</label>
           <br />
           <select name="Ownership" id='Ownership' placeholder="select Ownership" onChange={(e) => setForm({ ...form, Ownership: e.target.value })}>
             <option value="select Ownership">select Ownership</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="other">Other</option>
           </select>
         </div>
         <div className='input-box'>
           <label for="PropertyAge" className='details'>Property Age</label>

           <select name="PropertyAge" id='PropertyAge' placeholder="select Property Age" onChange={(e) => setForm({ ...form, PropertyAge: e.target.value })}>
             <option value="select Property Age"></option>

             <option value="house">House</option>
             <option value="flat">Flat</option>
             <option value="plot">Plot</option>
             <option value="other">Other</option>
           </select>
         </div>
         <div className='input-box'>
           <label for="PropertyApproved" className='details'>Property Approved</label>

           <select name="PropertyApproved" id='PropertyApproved' placeholder="select Property Approved" onChange={(e) => setForm({ ...form, PropertyApproved: e.target.value })} >
             <option value="select Property Approved">select Property Approved</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="other">Other</option>
           </select>
         </div>
         <div className='input-box'>
           <label for="PropertyDescription"  className='details'> Property Description</label>

           <input name='PropertyDescription' id='PropertyDescription' placeholder='' onChange={(e) => setForm({ ...form, PropertyDescription: e.target.value })} />
         </div>

         <div className='input-box'>
           <label for="BankLoan" classNmae="details">Bank Loan</label>

           <select name="BankLoan" id='BankLoan' placeholder="select Bank Loan" onChange={(e) => setForm({ ...form, BankLoan: e.target.value })}>
             <option value="select Bank Loan">Bank Loan</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="other">Other</option>
           </select>
         </div>

         {/* <div>
  <label>Upload image</label>
  <input type='file'name='Image' onChange={(e) => setForm({ ...form, Image: e.target.files[0] })}></input>

</div> */}
       </div>
       <div className='button1'>

<button style={{ color: 'whitesmoke' }}>Cancel</button>
<button type="submit" >Save&Coninue</button>
</div>
     </form>
     <Outlet />

   
     {
               data.status === "success" && <div style={{ color: "green" }}>ADDED SUCCESSFULLY</div>
           }{
               data.status === "failed" && <div style={{ color: "red" }}> FAILED</div>

           }


   </div>
   
    



  )
}








