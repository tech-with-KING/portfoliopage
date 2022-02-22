import React from 'react';
import './App.css'

import Main from './home/main/main';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom'
import ContacForm from './contactform';
import NavBar from './home/navbar/nav';
import DownBar from './home/downbar/down';
import Reviews from './home/reviews/reviws';
import About from './Aboutpage/about';



function App() {
  return (
    <BrowserRouter>
       <div  className='body'>
       <NavBar />
       
      
      <Routes >
        <Route path='/contact' element={<ContacForm /> } />
        <Route exact path='/' element={ <><Main /><Reviews /></> } />
        <Route exact path='/about' element={ <About />} />
     </Routes>
     
      <DownBar />
    </div>
    </BrowserRouter>
    
    )
}

export default App;
