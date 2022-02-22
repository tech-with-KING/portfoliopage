import React from 'react';
import './down.css'
import Github from './icons/github.svg'
import Instagrm from './icons/instagram.svg'
import Linkdin from './icons/linkdin.svg'
import Twitter from './icons/twitter.svg'
import Netlify from './icons/netlify.svg'
import Gmail from './icons/gmail.svg'

const DownBar=()=>{
    return(
    <div className='downcomponent'>
        {/* first half */}
        <div className='bottomnavbar' >
            <div className='none' >
            </div>
            <div className='tech_stacks'>
                <ul>
                    <li>Javascript</li>
                    <li>React-js</li>
                    <li>Material UI</li>
                    <li>Node Js</li>
                    <li>Python</li>
                    <li>Mongo-Db</li>
                    <li>Fire-Base</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        </div>
        {/* second half */}
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