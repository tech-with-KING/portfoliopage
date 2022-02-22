import React from 'react';
import { useState } from 'react';
import Typed from 'react-typed'
import Data from './data';
import './reviews.css'

const Nft = "src/home/reviews/image"

const details={...Data}
console.log(details)
const Reviews=()=>{
   
    return(
        <div className='about'>
                {Data.map((listitems)=>{
                    return(
                        <div key={listitems.description} className='bars'>
                            <div className={listitems.classname?'toped':'top'}>
                                <img src={require(`${listitems.imagepath}`).default} alt={Nft} className={listitems.classname?'imaged':'image'}></img>
                                <h3 style={{backgroundColor:`${listitems.button}`}}>{listitems.title}</h3>  
                            </div>
                           <div className='text'> <p>{listitems.description}</p> <button className='botn'>See More {'>>'}</button></div>

                        </div>
                    )
                })}
          <main className='mainone'></main>
          <main className='maintwo' >hello</main>
          <main className='mainthree' ></main>
          <main className='mainfour' ></main>
          <main className='mainfive' ></main>
          <main className='mainsix' ></main>
        </div>
    )
}
export default Reviews;