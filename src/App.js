// import logo from './logo.svg';
import './App.css';
// import Comp from './Comp';
// import Formcomponent from './form.js';
// import Boom_boom from './bim_bam_boom.js';
// import Click from './click.js';
import VideoComp from './components/VideoComp';
import HomeComp from './components/HomeComp';
import Logincard from './components/logincomp';
import SearchComp from "./components/search";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';


function App() {

  // const [data,Setdata] = useState('');

  return (
    <div className="parent-main">
      <header className="header-main">
        
        {/* <Comp></Comp>
        <Formcomponent></Formcomponent>
        <Formcomponent></Formcomponent> */}
        {/* <Boom_boom></Boom_boom>
        <Click></Click> */}

{/* Routing in React npm install react-router-dom */}

        <BrowserRouter>
        
          <Routes>

            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="/videos/:id" element={<VideoComp/>}></Route>
            <Route path="/login" element={<Logincard/>}></Route>
            <Route path="/search/:input_field" element={<SearchComp/>}></Route>

          </Routes>
      
        </BrowserRouter>





      </header>
      
    </div>
   
    
  );
  
}

export default App;
