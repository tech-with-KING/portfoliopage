import React from 'react';
import { useState } from 'react';
import NavBar from '../home/navbar/nav';
import './about.css'
import Info from './info';

const About=()=>{
    return(
        <>
        {Info.map((information)=>{
            
             return(
                 <div className={information.classname?'center_errors':'center_errors_f'}>
                    <button className='linets' style={{backgroundColor:information.button}}>{information.title}</button>
                    
                    <img src={require(`${information.imagepath}`).default} alt={information.title} className={information.classname?'linet':'linet'}></img>
                    <p>{information.description}<button className='madus'>continue reading {'>>'}</button></p>
            

         </div>
                    )   
                    
                })}
       
        </>
    )
        
}
export default About;