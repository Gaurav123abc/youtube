// import logo from './logo.svg';
import './App.css';
// import Comp from './Comp';
// import Formcomponent from './form.js';
// import Boom_boom from './bim_bam_boom.js';
// import Click from './click.js';
import VideoComp from './components/VideoComp';
import HomeComp from './components/HomeComp';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
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
            <Route path="/videos" element={<VideoComp/>}></Route>



          </Routes>
      
        </BrowserRouter>





      </header>
      
    </div>
   
    
  );
  
}

export default App;
