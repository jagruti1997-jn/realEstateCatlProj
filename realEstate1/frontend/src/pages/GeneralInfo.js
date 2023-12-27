import React, { useState } from 'react'
import { CiCamera } from "react-icons/ci";
import "./Image.css"
import { Link,Outlet,useParams,useNavigate,useLocation} from 'react-router-dom'
export default function GeneralInfo() {
  let navigateTo=useNavigate();
  const location = useLocation();
  const ID=location.state
  console.log(ID)
  const {people,token}=useParams()
  console.log(people,token)
  const [response, setResponse] = useState(null);

  const [form, setForm] = useState({
    Name: "Owner",
    Mobile:"",
    PostedBy:"amulya" ,
    SaleType:"1",
    FeaturedPackage:"house",
    PPDPackage:"1",
    image:null
    
    })
    const [data, setData] = useState("")
    const[toggle,settoggle]=useState(false)
   
    const submitData = async(e) => {
      console.log(form)

      e.preventDefault()
      try {
        const formData = new FormData();
        formData.append('Name', form.Name);
        formData.append('Mobile', form.Mobile);
        formData.append('PostedBy', form.PostedBy);
        formData.append('SaleType', form.SaleType);
        formData.append('FeaturedPackage', form.FeaturedPackage);
        formData.append('PPDPackage', form.PPDPackage);
        formData.append('image', form.image);

        const response = await fetch(`http://localhost:8000/posts/${ID}/img`, {
        method: "PUT",
        body: formData,
        headers: {
            // "Content-Type": "application/json",
            // "Accept": "application/json",
            "Authorization":`test ${token}`
        }
    }).then((res) => res.json()).then(
        (data) => {
            setData(data)
            settoggle(!toggle)
      
        localStorage.setItem('jsonwebtoken',`test ${token}`)
        if(data.status==="success"){
          alert( JSON.stringify(form))
          
          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/locationinfo`,{state: ID})
        }else{
          navigateTo(`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertyDetails`,{state: ID})

        }
}) } catch (error) {
  console.error('Error during file upload:', error);
 // setResponse(null); // Clear any previous response
}
}
  
  return (
    <div className='container'>
      
        <form onSubmit={submitData}>
          <div className='content'>
            <div className='input-box'>
              <label for="Name" className='details'>Name</label>
              <br />
              <select  name="Name" placeholder="" onChange={(e) => setForm({ ...form, Name: e.target.value })} >
                <option value="Owner">Owner</option>
                <option value="tenent">tenent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='input-box'>
              <label for="Mobile" className='details'>Mobile</label>
              <br />
              <input name='Mobile' placeholder='Enter Mobile Number' onChange={(e) => setForm({ ...form, Mobile: e.target.value })} />
            </div>
     

     
<div className='input-box'>
<label for="PostedBy" className='details'>Posted by</label>
<br />
<select name="PostedBy" placeholder="select Posted by" onChange={(e) => setForm({ ...form, PostedBy: e.target.value })}>
<option value="select Posted by">Posted by</option>
  <option value="amulya">amulya</option>
  <option value="jagruti">jagruti</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="SaleType" className='details'>Sale Type</label>

<select  name="SaleType" placeholder="select Sale Type" onChange={(e) => setForm({ ...form, SaleType: e.target.value })}>
  <option value="select Sale Type">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>
     
<div className='input-box'>
<label for="FeaturedPackage" className='details'>Featured Package</label>
<br />
<select  name="FeaturedPackage" placeholder="select Featured Package" onChange={(e) => setForm({ ...form, FeaturedPackage: e.target.value })}>
<option value="select Featured Package">Please select</option>
  <option value="house">House</option>
  <option value="flat">Flat</option>
  <option value="plot">Plot</option>
  <option value="other">Other</option>
</select>
</div>

<div className='input-box'>       
 <label for="PPDPackage" className='details'>PPD Package</label>
<br />
<select  name="PPDPackage" placeholder="select PPD Package" onChange={(e) => setForm({ ...form, PPDPackage: e.target.value })}>
  <option value="select PPD Package">Please select</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="other">Other</option>
</select>
</div>

{/* <div>
<input type='file' name='image' 
  accept="image/*"   onChange={(e)=>setForm({...form,image:e.target.files[0]})}></input></div> */}
<div style={{display:"inline-block",alignItems:"center"}}>

<div class="file-container">
    <label class="custom-file-container" for="fileInput"><CiCamera style={{width:"30px",height:"50px",marginTop:"-8px",marginLeft:"5px"}}/></label>
    <input type="file" name='image' id="fileInput" class="file-input"  accept="image/*"   onChange={(e)=>setForm({...form,image:e.target.files[0]})}></input> 
    </div> 
    <div>
    <label style={{marginLeft:"20px"}}>Add photo</label>

    </div>
    </div>


</div>
<div className='button1'> 
<button>
            <Link to={`/newpage/${encodeURIComponent(people)}/${encodeURIComponent(token)}/propertyDetails`}>Previous
           </Link>
            </button>
    <button > Save&Coninue</button>  
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
