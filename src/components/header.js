import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import SearchComp from "./search";
// import { useNavigate } from "react-router-dom";
// import dotenv from 'dotenv';


const apiUrl = "https://www.googleapis.com/youtube/v3/search";

function Header() {
  // dotenv.config();
  const apiKey = process.env.REACT_APP_YOUTUBETOKEN;
  // console.log(apiKey);

  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [input_field, Setinput] = useState("");
  

  function Handleinput(query) {
    const input_data = query.target.value;
    Setinput(input_data);
  }

  // let data;
  // const query = input_field;
  async function SearchYT(query) {
    setIsLoading(true);
    try {
      // localStorage.setItem('youtubeData', null);
      const url = `${apiUrl}?part=snippet&maxResults=30&q=${encodeURIComponent(
        query
      )}&key=${apiKey}`;

      // console.log(encodeURIComponent(query));

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const jsonString = JSON.stringify(data, null, 2);
      // const blob = new Blob([jsonString], { type: 'application/json' });
      // fs.writeFileSync('./example.json', jsonString, 'utf-8');
      localStorage.setItem("youtubeData", jsonString);
    } catch (error) {
      console.log(error);
      alert("Something error Occured" + error);
    } finally {
      setIsLoading(false);
    }

    window.location.reload();
  }

  function getResult() {
    // alert("File saved");
    // localStorage.setItem('youtubeData', null);
    SearchYT(input_field);
    alert("Searching for : " + input_field);
    // navigate("/search/" + input_field);
  }

  return (
    <div className="header">
      <div className="head-sec1">
        <Link to="/">
          <img
            className="logo"
            src="https://cdn.discordapp.com/attachments/829976806776897556/1170612671180197959/youtube.png?ex=6559ad01&is=65473801&hm=938d757c6cdca4ecb56fc803f2fa2f9079b011075f0e948a97b6f5937e8c9e11&"
            alt=""
          ></img>
        </Link>
        <div className="logo-text">Youtube</div>
      </div>

      <div className="head-sec2">
        <input
          className="searchbox"
          placeholder="Search Here"
          type="text"
          value={input_field}
          onChange={Handleinput}
        ></input>
        <form>
          <Link to={"/search/" + input_field} target="_parent">
          <button onClick={getResult} className="search-button">
            <img
              className="search-button-image"
              src="https://cdn.discordapp.com/attachments/1170627554017816626/1171287078743576686/search_1.png?ex=655c2119&is=6549ac19&hm=4665f03b9c1ae02aef8baca39441d0c89fc15e16330d587dd08387d7dfbbdf84&"
              alt=""
            ></img>
          </button>
          </Link>
        </form>
      </div>
      <div className="">
        <form>
          <Link to="/login">
            <input className="head-sec3" type="button" value="Sign in"></input>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Header;
