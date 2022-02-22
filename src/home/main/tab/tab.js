import React,{ Component,useState,useEffect } from 'react';

import './tab.css'
import DownloadIcon from '@mui/icons-material/Download';
import Typed from 'react-typed'

import { ArrowRight } from '@mui/icons-material/ArrowRight';



const Tab=()=>{
   const [zoom,setzoom]=useState(true)
   const setter=()=>{
      if(zoom==true){
         setzoom(false)
      }
      else{
         setzoom(true)
      }

   }
  
   return(
    
    <div className='message'>
       <h1>Hi I Am</h1>
       <h1>Kingsley Francis Okpo</h1>
       <p>i <Typed
                    strings={['Am A React developer.','Am A Python Developer.','do Virtual Assistance.','Engineer APIs with Node JS.']}
                    typeSpeed={50}
                    backSpeed={100}
                    loop={true}  
                    className='typed'   
          /></p>
         <div className='resume'>
            <DownloadIcon style={{fontSize:'50px',fontWeight:"bold"}}/>
            <button className='downloadcv'style={zoom?{backgroundColor:'rgb(34, 185, 102)',height:'60px'}:{backgroundColor:'rgb(211, 101, 125)'}}>DEPLOY</button>

         </div>
          <main className='main1'></main>
          <main className='main2' >hello</main>
          <main className='main3' ></main>
         
    </div>
   
   )
}
export default Tab ;