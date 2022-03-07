import React from 'react';
import './down.css'
import Github from './icons/github.svg'
import Instagrm from './icons/instagram.svg'
import Linkdin from './icons/linkdin.svg'
import Twitter from './icons/twitter.svg'
import Netlify from './icons/netlify.svg'
import Gmail from './icons/gmail.svg'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
const DownBar=()=>{
    return(
    <div className='downcomponent'>
      
        <div className='bottomnavbar' >
            <div className='none' >
                <li><HomeIcon /> Home</li>
                <li><AppsIcon /> Projects</li>
                <li><InfoIcon /> About</li>
                <li><PhoneIcon /> Contact</li>
            </div>
            <div className='tech_stacks'>
                <ul>
                    <li>Javascript<div className='rate'><div className='rated'></div></div></li>
                    <li>React-js<div className='rate'><div className='rated'></div></div></li>
                    <li>Material UI<div className='rate'><div className='rated'></div></div></li>
                    <li>Node Js<div className='rate'><div className='rated'></div></div></li>
                    <li>Python<div className='rate'><div className='rated'></div></div></li>
                    <li>Mongo-Db<div className='rate'><div className='rated'></div></div></li>
                    <li>Fire-Base<div className='rate'><div className='rated'></div></div></li>
                    <li>Bootstrap<div className='rate'><div className='rated'></div></div></li>
                </ul>
            </div>
        </div>
        
        <div className='bottom'>
            <div>
            <div className='mediahandles' >
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Github)})`}} className='li'></div></a>
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Gmail)})`}} className='li'></div></a>
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Netlify)})`}} className='li'></div></a>
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Instagrm)})`}} className='li'></div></a>
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Twitter)})`}} className='li'></div></a>   
                    <a href='./localhost:3000'><div style={{ backgroundImage: `url(${(Linkdin)})`}} className='li'></div></a>                 
                </div>
            </div>
            <div>
             <div className='line'><h4>Socials</h4></div>
             <p className='address'>
                 Copyright: Tech_with_king 2019<br></br>
                 City:Ikeja Lagos Nigeria <br></br>
                 University Of Lagos State Saint Finbars Way Akoka; Tel +234*******
            </p>
            </div>
        </div>
          
    </div>
    )
       
}
export default DownBar;