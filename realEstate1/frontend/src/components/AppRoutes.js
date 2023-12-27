import React from 'react'

import { BrowserRouter, Link, useParams } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import '../App.css'

import SideBar from './SideBar';
import Property from '../pages/Property'
import Assistance from '../pages/Assistance';
import RecievedInterest from '../pages/RecievedInterest';
import SentInterest from '../pages/SentInterest';
import PropertyViews from '../pages/PropertyViews';
import TariffPlan from '../pages/TariffPlan';
import NewPage from '../pages/NewPage';
import BasicInfo from '../pages/BasicInfo';
import PropertyDetails from '../pages/PropertyDetails';
import GeneralInfo from '../pages/GeneralInfo';
import Locationinfo from '../pages/Locationinfo';
import Login from './Login';
import Register from './Register';
import ShowPage from '../pages/ShowPage';
import EditPage from './EditPage';

export default function AppRoutes() {
  const {people,token} =useParams();

  return (
    <div>


    <SideBar>
     <Routes>
            <Route path="/property" element={<Property/>}/>
             
              <Route path='/' element={<NewPage/>}>
                 <Route path='' element={<BasicInfo/>} />
                 <Route path=':postid/propertydetails' element={<PropertyDetails/>} />
                 <Route path=':postsid/generalinfo' element={<GeneralInfo/>} />
                 <Route path=':postsid/locationinfo' element={<Locationinfo/>} />
              </Route>


              
            <Route path='/assistance' element={<Assistance/>}/>
            <Route path='/recievedinterest' element={<RecievedInterest/>}/>
            <Route path='/sentinterest' element={<SentInterest/>}/>
            <Route path='/propertyviews' element={<PropertyViews/>}/>
            <Route path='/tariffplan' element={<TariffPlan/>}/> 
                        </Routes>

          
</SideBar>
      
  
    </div>
  )
}

