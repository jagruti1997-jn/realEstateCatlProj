import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Link,useParams,useNavigate,useLocation} from "react-router-dom";
import "./pages.css"
export default function PropertyDetails() {
  let navigateTo=useNavigate();
  const location = useLocation();
  const ID=location.state
  console.log(ID)
  const {people,token}=useParams()
  console.log(people,token)
  const [form, setForm] = useState({
    AreaUnit: "1",
    NoofBHK:"2" ,
    NoofFloor:"1",
    Attached:"Yes",
    WesternToilet:"1",
    Furnished:"Yes",
    CarParking:"1",
    Lift:"1",
    Facing:"north",
  

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
          
          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/generalInfo`,{state: ID})
        }else{
          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`,{state: ID})

        }
})
  } 
  return (


    <div className='container'>
      
    <form onSubmit={submitData} encType='multipart/form-data'>
      <div className='content'>
        <div className='input-box'>
          <label className='details'>Length</label>
          <br />
          <input name='Length' placeholder='Example:1000' onChange={(e) => setForm({ ...form, Length: e.target.value })} />
        </div>
        <div className='input-box'>
          <label className='details'>Breadth</label>
          <br />
          <input name='Breadth' placeholder='Example:1000' onChange={(e) => setForm({ ...form, Breadth: e.target.value })} />
        </div>
        <div className='input-box'>
          <label for="details">Total Area</label>
          <br />
          <input name='TotalArea' placeholder='Example:7500' onChange={(e) => setForm({ ...form, TotalArea: e.target.value })} />
        </div>

        <div className='input-box'>
          <label for="AreaUnit" className='details'>Area Unit</label>
          <br />
          <select  name="AreaUnit" id="AreaUnit" placeholder="select Area Unit" onChange={(e) => setForm({ ...form, AreaUnit: e.target.value })} >
            <option value="select Area Unit">select Area Unit</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="other">Other</option>
          </select>
        </div>
      

        <div className='input-box'>
          <label for="NoofBHK" className='details'>No of BHK</label>
          <br />
          <select name="NoofBHK" id="NoofBHK" placeholder="select No of BHK"
           onChange={(e) => setForm({ ...form, NoofBHK: e.target.value })}
            >
            <option value="select No of BHK">select No of BHK</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className='input-box'>
          <label for="NoofFloor" className='details'>No of Floor</label>
          <br />
          <select  name="NoofFloor" id="NoofFloor"  placeholder="select No of Floor" onChange={(e) => setForm({ ...form, NoofFloor: e.target.value })}
>
            <option value="select No of Floor">select No of Floor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="other">Other</option>
          </select>
        </div>
      

      


        <div className='input-box'>
          <label for="Attached" className='details'>Attached</label>
          <br />
          <select  name="Attached" id='Attached' placeholder="select Attached" onChange={(e) => setForm({ ...form, Attached: e.target.value })}
>
            <option value="select Attached">select Attached</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className='input-box'>
          <label for="WesternToilet" className='details'>Western Toilet</label>
          <br />
          <select  name="WesternToilet" id='WesternToilet' placeholder="select Western Toilet" onChange={(e) => setForm({ ...form, WesternToilet: e.target.value })} >
            <option value="select Western Toilet">select Western Toilet</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="other">Other</option>
          </select>
        </div>
      

      


        <div className='input-box'>
          <label for="Furnished" className='details'>Furnished</label>
          <br />
          <select  name="Furnished" id='Furnished' placeholder="select Furnished" onChange={(e) => setForm({ ...form, Furnished: e.target.value })} >
        
            <option value="select Furnished">select Furnished</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className='input-box'>
          <label for="CarParking" className='details'>Car Parking</label>
          <br />
          <select  name="CarParking" id='CarParking' placeholder="select Car Parking" onChange={(e) => setForm({ ...form, CarParking: e.target.value })} >
            <option value="select Car Parking">select Car Parking</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="other">Other</option>
          </select>
        </div>
      
      
        <div className='input-box'>
          <label for="Lift" className='details'>Lift</label>
          <br />
          <select  name="Lift" id='Lift' placeholder="select Lift" onChange={(e) => setForm({ ...form, Lift: e.target.value })} >
            <option value="select Lift">select Lift</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className='input-box'>
          <label for="Electricity" className='details'>Electricity</label>
          <br />
          <input name='Electricity' placeholder='Example:3phase' onChange={(e) => setForm({ ...form, Electricity: e.target.value })} />
        </div>
     
   
        <div className='input-box'>
          <label for="Facing" className='details'>Facing</label>
          <br />
          <select name="Facing" id='Facing' placeholder="select Facing" onChange={(e) => setForm({ ...form, Facing: e.target.value })} >
            <option value="select Facing">select Facing</option>
            <option value="north">north</option>
            <option value="south">south</option>
            <option value="east">east</option>
            <option value="west">west</option>

            <option value="other">Other</option>
          </select>
        </div>
    


  
        </div>
        <div className='button1'>
  
  <button  onClick={()=>navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}`)}>Previous</button>
  <button>Save&Coninue</button>
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
