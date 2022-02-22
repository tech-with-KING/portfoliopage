import React from 'react';
import './nav.css'
import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
 import DarkModeIcon from '@mui/icons-material/DarkMode';
 import HomeIcon from '@mui/icons-material/Home';
 import AppsIcon from '@mui/icons-material/Apps';
 import InfoIcon from '@mui/icons-material/Info';
 import MenuIcon from '@mui/icons-material/Menu';
 
import {Link,BrowserRouter} from 'react-router-dom'
import { CancelOutlined } from '@mui/icons-material';




const NavBar=()=>{
    const [toggle,settoggle]=useState(false)
    // const menueBar=()=>{
    //     return(
         
    //     )
    // }
     
    
    
    return(

    <div className='navbar'>
           <div className='menuebar' style={toggle?{width:'30%'}:{width:'0',paddingLeft:'0'}}>
                <CancelOutlined className='cancel' style={{fontSize:'50px',fontWeight:'lighter'}} onClick={()=>{ toggle?settoggle(false) :settoggle(true)}} ></CancelOutlined>
                <li><HomeIcon /> Home</li>
                <li><AppsIcon /> Projects</li>
                <li><InfoIcon /> About</li>
                <li><PhoneIcon /> Contact</li>
                {/* <main className='maine1'></main>
                <main className='main2'></main> */}
            </div>
        
        <ul className='subnav'>
           <li>Home</li>
           <li>About</li>
           <li>Projects</li>
           
          
        </ul>
         <DarkModeIcon className='day'  style={{fontSize:'30px'}}/> 
         {/* toggle bar function call */}
        {/* {toggle?menueBar():null} */}
        <MenuIcon onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} style={toggle ?{zIndex:'1'}:{zIndex:'0'}}style={{fontSize:'30px',fontWeight:'bolder'}} className='menue'></MenuIcon> 

    </div>     
    )
}
export default NavBar;