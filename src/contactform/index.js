import React from 'react';
import { useState } from 'react';
import NavBar from '../home/navbar/nav';
import './style.css'
  const details=[]
const ContacForm=()=>{
  
    
     const takeUserdetails=()=>{
          details.push({firstname:firstname,lastname:laststname,email:email,phone:Phonenumbe,reason:reason})
          console.log(details)
     }
    const [firstname,setfirstname]=useState('')
    const [laststname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [Phonenumbe,setphonenumber]=useState()
    const [reason,setreason]=useState('')
    return(
        <div className='about'>
            <div className='inputdiv'>
               <div style={{alignItems:'center'}}><h2>Contact Form</h2></div>
                <div className='fullname'> <input  onChange={(e)=>{setfirstname(e.target.value)}} placeholder='First Name...'></input><input onChange={(e)=>{setlastname(e.target.value)}} placeholder='Last Name...'></input></div>
                <div className='firstname'> <input onChange={(e)=>{setfirstname(e.target.value)}} placeholder='First Name...'></input></div>
                <div className='lastname'> <input onChange={(e)=>{setlastname(e.target.value)}} placeholder='Last Name...'></input></div>
                <div><input onChange={(e)=>{setemail(e.target.value)}} placeholder='Email...'></input></div>
                <div><input onChange={(e)=>{setphonenumber(e.target.value)}} placeholder='Phone no...'></input></div>
                <div><input onChange={(e)=>{setreason(e.target.value)}} style={{width:"100%"}} placeholder='describe the error...'></input></div>
                <div style={{borderBottom:'none', justifyContent:'flex-end'}}><button onClick={()=>{takeUserdetails()}} className='button'>submit</button></div>
            </div>
            
          <main className='main1'></main>
          <main className='main2' >hello</main>
          <main className='main3' ></main>
         
        </div>
    )
}
export default ContacForm;