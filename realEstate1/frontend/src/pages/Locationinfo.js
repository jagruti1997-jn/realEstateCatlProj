import React, { useState } from 'react'
import { Link,Outlet,useParams,useNavigate,useLocation} from 'react-router-dom'
export default function Locationinfo() {
  let navigateTo=useNavigate();
  const location = useLocation();
  const ID=location.state
  console.log(ID)
  const {people,token}=useParams()
  console.log(people,token)
  const [form, setForm] = useState({
    City: "Hyderabad",
    Area:"Ap" ,
    Pincode:"502032"
    })
    const [data, setData] = useState("")
    const[toggle,settoggle]=useState(false)
    const submitData = (e) => {
      e.preventDefault()
    fetch(`http://localhost:8000/posts/${ID}`, {
        method: "PUT",
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
      
        localStorage.setItem('jsonwebtoken',`test ${token}`)
        if(data.status==="success"){
          alert( JSON.stringify(form))
          navigateTo(`/home/${encodeURIComponent(people)}/${encodeURIComponent(token)}`,{state: ID})

          
        }else{
          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalinfo`,{state: ID})

        }
})
  } 
  return (
    <div className='container'>
      <form onSubmit={submitData}>
      <div className='content'>
      

     
<div className='input-box'>
      <label for="Email" className='details'>Email</label>
      <br />
      <input name='Email' placeholder='Email' onChange={(e) => setForm({ ...form, Email: e.target.value })} />
    </div>

  <div className='input-box'>       
   <label for="City" className='details'>City</label>
  <br />
  <select name="City" placeholder="select City" onChange={(e) => setForm({ ...form, City: e.target.value })} >
    <option value="select City">select City</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="warangal">warangal</option>
    <option value="Maharastra">Maharastra</option>
    <option value="other">Other</option>
  </select>
  </div>   
<div className='input-box'>
<label for="Area" className='details'>Area</label>

<select  name="Area" placeholder="select Area" onChange={(e) => setForm({ ...form, Area: e.target.value })}>
<option value="select Area">select Area</option>
  <option value="Telangana">Telangana</option>
  <option value="Ap">Ap</option>
  <option value="Kolkata">Kolkata</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="Pincode" className='details'>Pincode</label>
<br />
<select name="Pincode" placeholder="select Pincode" onChange={(e) => setForm({ ...form, Pincode: e.target.value })}>
  <option value="select Pincode">select Pincode</option>
  <option value="502032">502032</option>
  <option value="506002">506002</option>
  <option value="506001">506001</option>
  <option value="other">Other</option>
</select>
</div>



     
      <div className='input-box'>
            <label for="Address" className='dtails'>Address</label>
            <br />
            <input name='Address' placeholder='Address' onChange={(e) => setForm({ ...form, Address: e.target.value })} />
          </div>
  <div className='input-box'>
            <label for="Landmark" className='details'>Landmark</label>
            <br />
            <input name='Landmark' placeholder='Landmark' onChange={(e) => setForm({ ...form, Landmark: e.target.value })}/>
          </div>



     
      <div className='input-box'>
            <label for="Latitude" className='details'>Latitude</label>
            <br />
            <input name='Latitude' placeholder='Latitude' onChange={(e) => setForm({ ...form, Latitude: e.target.value })}/>
          </div>
  <div className='input-box'>
            <label for="Longitude" className='details'>Longitude</label>
            <br />
            <input name='Longitude' placeholder='Longitude' onChange={(e) => setForm({ ...form, Longitude: e.target.value })}/>
          </div>




      </div >
       
        <div className='button1'>
        <button onClick={()=>navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalinfo`)}>Previous</button>
        <button style={{color:'whitesmoke'}}>Add Property</button>
</div>
 
</form>  
<Outlet/>

{
                data.status === "success" && <div style={{ color: "green" }}>ADDED SUCCESSFULLY</div>
            }{
                data.status === "failed" && <div style={{ color: "red" }}> FAILED</div>

            }
    </div>
  )
}
