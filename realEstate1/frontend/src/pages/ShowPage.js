import React,{useState,useEffect} from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'

const ShowPage = () => {
const navigate=useNavigate()
  const {people,token}=useParams()


  const location = useLocation();
  const data=location.state
const backButton=()=>{
  navigate(`/home/${encodeURIComponent(people)}/${encodeURIComponent(token)}`)
}



  return (
    <div className='showContainer'>
      <div className='header'>
        <div>
      <h3>User Details</h3>
      </div>
      <div>
      <button onClick={backButton}>Back to Home</button>
      </div>
      </div>
      <div className='content'>
      
      
     <div className='details'>
      <p><b style={{color:"skyblue"}}>Name:</b>         {data.Email} </p>
      
    </div>
    <div className='details'>
      <p><b style={{color:"skyblue"}}>Address:</b>         {data.Address} </p>
      </div>

    <div className='details'>
      <p><b style={{color:"skyblue"}}>Propert Type:</b>         {data.PropertyType} </p>
      
    </div>
    <div className='details'>
      <p><b style={{color:"skyblue"}}>Nego table:</b>          {data.Negotable} </p>
      
    </div>
    <div className='details'>
      <p><b>Property Age:</b>          {data.PropertyAge} </p>
      
    </div>
    <div className='details'>
      <p><b>Propert Approved :</b>          {data.PropertyApproved} </p>
      
    </div>
    <div className='details'>
      <p><b>Details :</b>          {data.Name} </p>
      
    </div>
    <div className='details'>
      <p><b>Bank Loan :</b>          {data.BankLoan} </p>
      
    </div>
    <div className='details'>
      <p><b>Area Unit :</b>          {data.AreaUnit} </p>
      
    </div>
    <div className='details'>
      <p><b>Length :</b>          {data.Length} </p>
      
    </div>
    <div className='details'>
      <p><b>Breadth :</b>          {data.Breadth} </p>
      
    </div>
    <div className='details'>
      <p><b>Total Area :</b>          {data.TotalArea} </p>
      
    </div>
    <div className='details'>
      <p><b>No of BHK:</b>          {data.NoofBHK} </p>
      
    </div>
    <div className='details'>
      <p><b>Western Toilet:</b>          {data.WesternToilet} </p>
      
    </div>
    <div className='details'>
      <p><b>car parking :</b>          {data.CarParking} </p>
      
    </div>
    <div className='details'>
      <p><b>Lift :</b>          {data.Lift} </p>
      
    </div>
    <div className='details'>
      <p><b>Electricity :</b>          {data.Electricity} </p>
      
    </div>
    <div className='details'>
      <p><b>PPD Package:</b>           {data.PPDPackage} </p>
      
    </div>
    <div className='details'>
      <p><b>Landmark :</b>           {data.Landmark} </p>
      
    </div>
    <div className='details'>
      <p><b>City :</b>           {data.City} </p>
      
    </div>
    <div className='details'>
      <p><b>Pincode:</b>           {data.Pincode} </p>
      
    </div>
    <div className='details'>
      <p><b>Posted By:</b>           {data.PostedBy} </p>
      
    </div>
    <div className='details'>
      <p><b>Mobile :</b>           {data.Mobile} </p>
      
    </div>
    </div>
   
      </div>


    
  )
  }
  

export default ShowPage