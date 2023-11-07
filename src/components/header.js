import { Outlet, Link } from "react-router-dom";

function Header() {

    return(

        <div className="header">
            
            <div className="head-sec1">
            <Link to="/">
            <img className="logo" src="https://cdn.discordapp.com/attachments/829976806776897556/1170612671180197959/youtube.png?ex=6559ad01&is=65473801&hm=938d757c6cdca4ecb56fc803f2fa2f9079b011075f0e948a97b6f5937e8c9e11&" alt=""></img>
            </Link>
            <div className="logo-text">Youtube</div>
            </div>
            
            <div className="head-sec2">
            <input className="searchbox" placeholder="Search Here" type="text"></input>
            <input className="search-button" type="button" value="🔍"></input>
            </div>
            <div className="">
                <form>
                <input className="head-sec3" type="button" value="Sign in"></input>
                </form>
            
            </div>
      </div>



     
    );


}

export default Header;