
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import VideoComponent from './VideoContent';
import VideoPage from './VideoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './loginComponent';
=======
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

>>>>>>> 03e382b6ef47ecf48d82d8fa990fa54c7d2c04c7

function App() {

  // const [data,Setdata] = useState('');

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
          <Route path='/video/:id' element={<VideoComponent></VideoComponent>}></Route>
          <Route path='/vedioPage/:id' element={<VideoPage></VideoPage>}></Route>
          <Route path='/login' element={<LoginComponent/>}></Route>

        </Routes>
      </BrowserRouter>

<<<<<<< HEAD
=======
        <BrowserRouter>
        
          <Routes>

            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="/videos/:id" element={<VideoComp/>}></Route>
            <Route path="/login" element={<Logincard/>}></Route>
            <Route path="/search/:input_field" element={<SearchComp/>}></Route>

          </Routes>
      
        </BrowserRouter>





      </header>
      
>>>>>>> 03e382b6ef47ecf48d82d8fa990fa54c7d2c04c7
    </div>
  );
}

export default App;
