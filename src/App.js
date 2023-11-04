import logo from './logo.svg';
import './App.css';
import Comp from './Comp';
import Formcomponent from './form.js';
import Boom_boom from './bim_bam_boom.js';
import Click from './click.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
        This is a webpage
        </p>
        <div>
          <table border='3' >
            <thead>
              <th>Name</th>
              <th>Class</th>
              <th>Course</th>
            </thead>
            <tbody>
              <tr>
                <td>Aditya</td>
                <td>A1</td>
                <td>BTECH</td>
              </tr>
              <tr>
                <td>Gaurav</td>
                <td>A2</td>
                <td>MCA</td>
              </tr>
              <tr>
                <td>Tiwari</td>
                <td>A1</td>
                <td>BSc Agri.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          This table is a react component
        </p>
        {/* <Comp></Comp>
        <Formcomponent></Formcomponent>
        <Formcomponent></Formcomponent> */}
        <Boom_boom></Boom_boom>
        <Click></Click>

{/* Routing in React npm install react-router-dom */}

        <BrowserRouter>
        
          <Routes>

            <Route path="/click" element={<Click />} />
            <Route path="/boom" element={<Boom_boom />} />



          </Routes>
      
        </BrowserRouter>





      </header>
      
    </div>
   
    
  );
  
}

export default App;
