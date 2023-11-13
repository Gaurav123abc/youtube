import ".././CSS/searchgrid.css";
// import Videogrid from "./videogrid";
import { Link } from "react-router-dom";


function Searchcard(props) {
  
  const grid_thumbSC = props.grid_thumbSC;
  const grid_titleSC = props.grid_titleSC;
  const grid_chnameSC = props.grid_chnameSC;
  const grid_chdesSC = props.grid_chdesSC;
  const grid_idSC = props.grid_idSC;
  

    return(

        <div className="gridcard-1">
        <img className="grid-thumbnail-1" src={grid_thumbSC} alt=""></img>
  
        <div className="grid-data-1">
          <div className="grid-data-title-1">{grid_titleSC}</div>
          <div className="grid-data-channel-1">{grid_chnameSC}</div>
          <div className="grid-data-chdata-1"> {}About: {grid_chdesSC} </div>
        </div>
      </div>        




    );
    

}

export default Searchcard;