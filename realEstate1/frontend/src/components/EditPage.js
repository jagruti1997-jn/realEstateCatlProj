import React, {useState,useEffect} from 'react'
import { useLocation ,useParams ,useNavigate} from 'react-router-dom';
const EditPage = () => {
    let navigateTo=useNavigate();
    const location = useLocation();
    const editData=location.state
    console.log(editData)
    const {people,token}=useParams()
    const ID=editData._id
    const [Email,setEmail]=useState(editData.Email)
    const [City,setCity]=useState(editData.City)
    const [Area,setArea]=useState(editData.Area)
    const [Pincode,setPincode]=useState(editData.Pincode)
    const [Address,setAddress]=useState(editData.Area)
    const [Latitude,setLatitude]=useState(editData.Latitude)
    const [Longitude,setLongitude]=useState(editData.Longitude)
    const [Landmark,setLandmark]=useState(editData.Landmark)
    const [PropertyType,setPropertyType]=useState(editData.PropertyType)
    const [PropertyAge,setPropertyAge]=useState(editData.PropertyAge)
    const [AreaUnit,setAreaUnit]=useState(editData.AreaUnit)
    const [Electricity,setElectricity]=useState(editData.Electricity)
     
      const [datas, setDatas] = useState("")
      const[toggle,settoggle]=useState(false)

    //   useEffect(() => {
    //     fetch(`http://localhost:8000/posts/${ID}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "Authorization":`test ${token}`
    //         }
    //     }).then((response) => response.json()).then((value) =>{
    //       setForm(value.posts)
    //     }
    // , [])})


      const submitData = (e) => {
        e.preventDefault()
        // localStorage.getItem('postsID',`${postsID}`)
        console.log(people)
        console.log(ID)
      fetch(`http://localhost:8000/posts/editpage/${ID}`, {
          method: "PUT",
          body: JSON.stringify({Email,City,Area,Pincode,Landmark,Longitude,Latitude,Address,PropertyType,PropertyAge,AreaUnit,Electricity}),
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization":`test ${token}`
          }
      }).then((res) => res.json()).then(
          (datas) => {
              setDatas(datas)
              settoggle(!toggle)
        
          localStorage.setItem('jsonwebtoken',`test ${token}`)
          if(datas.status==="success"){
            // const postsID=data.postsId
           
  
            alert( "updated successful")
            navigateTo(`/home/${encodeURIComponent(people)}/${encodeURIComponent(token)}`,{state: ID})
  
            
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
        <input name='Email' placeholder='Email' value={Email}  onChange={(e) =>setEmail(e.target.value)} />
      </div>
  
    <div className='input-box'>       
     <label for="City" className='details'>City</label>
    <br />
    <select name="City" placeholder="select City" value={City} onChange={(e) => setCity(e.target.value)} >
      <option value="select City">select City</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="warangal">warangal</option>
      <option value="Maharastra">Maharastra</option>
      <option value="other">Other</option>
    </select>
    </div>   
  <div className='input-box'>
  <label for="Area" className='details'>Area</label>
  
  <select  name="Area" placeholder="select Area" value={Area} onChange={(e) => setArea(e.target.value)}>
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
  <select name="Pincode" placeholder="select Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)}>
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
              <input name='Address' placeholder='Address' value={Address} onChange={(e) => setAddress(e.target.value)} />
            </div>
    <div className='input-box'>
              <label for="Landmark" className='details'>Landmark</label>
              <br />
              <input name='Landmark' placeholder='Landmark' value={Landmark} onChange={(e) => setLandmark(e.target.value)}/>
            </div>
  
  
  
       
        <div className='input-box'>
              <label for="Latitude" className='details'>Latitude</label>
              <br />
              <input name='Latitude' placeholder='Latitude' value={Latitude} onChange={(e) => setLatitude(e.target.value)}></input>
            </div>
    <div className='input-box'>
              <label for="Longitude" className='details'>Longitude</label>
              <br />
              <input name='Longitude' placeholder='Longitude' value={Longitude} onChange={(e) => setLongitude(e.target.value)}/>
            </div>


            <div className='input-box'>
              <label for="PropertyType" className='details'>Property Type</label>
              <br />
              <input name='PropertyType' placeholder='PropertyType' value={PropertyType} onChange={(e) => setPropertyType(e.target.value)}></input>
            </div>
    <div className='input-box'>
              <label for="PropertyAge" className='details'>Property Age</label>
              <br />
              <input name='PropertyAge' placeholder='PropertyAge' value={PropertyAge} onChange={(e) => setPropertyAge(e.target.value)}/>
            </div>


            <div className='input-box'>
              <label for="AreaUnit" className='details'>Area Unit</label>
              <br />
              <input name='AreaUnit' placeholder='AreaUnit' value={AreaUnit} onChange={(e) => setAreaUnit(e.target.value)}></input>
            </div>
    <div className='input-box'>
              <label for="Electricity" className='details'>Electricity</label>
              <br />
              <input name='Electricity' placeholder='Electricity' value={Electricity} onChange={(e) => setElectricity(e.target.value)}/>
            </div>
  
  
  

        </div >
         
          <div className='button1'>
          <button>Previous</button>
          <button style={{color:'whitesmoke'}}>Add Property</button>
  </div>
    
    
  </form>  
  
  
  {
                  datas.status === "success" && <div style={{ color: "green" }}>ADDED SUCCESSFULLY</div>
              }{
                  datas.status === "failed" && <div style={{ color: "red" }}> FAILED</div>
  
              }
      </div>
    )
}

export default EditPage