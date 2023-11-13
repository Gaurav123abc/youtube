import ".././CSS/homecomponent.css";
import "../CSS/sidebar.css";
import Videocard from "./Videocard";
import Bar_card from "./bar_card";
import "../CSS/videopage.css";
import videos from ".././videos.json";
import channel from ".././channel.json";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

// import "th1.jpg"

const thunmnail_array = ["https://i.ytimg.com/vi/Seb3lULQruE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0VWl81lgqM7Hr0Tm-7axmD-3xzA","https://i.ytimg.com/vi/yqqaW8DCc-I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcmObtixo54axsCswupU1Sbpbmzw","https://media.discordapp.net/attachments/829976806776897556/1170627553757773865/th6.jpg?ex=6559bade&is=654745de&hm=d14c5dfd50eacfa7ddc612ef655259d9cf937096f4f6b4b8685f3626a2291ae3&=&width=986&height=554"];

const logo_array = ["https://yt3.ggpht.com/ytc/APkrFKbgpcu4OB5po9mJ-eD229vZrdW9JXws03uJjuOasQ=s68-c-k-c0x00ffffff-no-rj","https://yt3.googleusercontent.com/ytc/APkrFKbsRG8lw574LsQvXESKkrIwHeJTtoH0kw9CJdejINk=s176-c-k-c0x00ffffff-no-rj","https://media.licdn.com/dms/image/C4D0BAQEPrlm8-72Meg/company-logo_200_200/0/1656675901242/labour_law_advisor_logo?e=2147483647&v=beta&t=xN8NxNi4buGsylR0omR1ityA6-HAM9MPr41LGFqczBc"]; 




function HomeComp() {

 


  return (
    <div className="parent">
      <Header></Header>
      <div className="main-body">
        <Sidebar></Sidebar>
        <div className="videos">
            
            <Videocard vid_title="HEAVY CONSTRUCTION of Sewage?" thumbnail_uri={thunmnail_array[0]} logo_uri={logo_array[0]}
            channel_name="Practical Enginering" channel_view="1.3M views" time="2 days"></Videocard>

            <Videocard vid_title="Insane Engineering of Percy" thumbnail_uri={thunmnail_array[1]} logo_uri={logo_array[1]}
            channel_name="Real Enginering" channel_view="5M views" time="1 Month"></Videocard>

            <Videocard vid_title="Total Guide for Health Insurance" thumbnail_uri={thunmnail_array[2]} logo_uri={logo_array[2]}
            channel_name="LLA - Labour Law Advisor" channel_view="1.1 Lakh views" time="2 Years"></Videocard>
            <Videocard vid_title="Total Guide for Health Insurance" thumbnail_uri={thunmnail_array[2]} logo_uri={logo_array[2]}
            channel_name="LLA - Labour Law Advisor" channel_view="1.1 Lakh views" time="2 Years"></Videocard>


            
            {
              videos.map(function(video) {
                return(
                  <Videocard
                  vid_title={video.title}
                  thumbnail_uri={video.thumbnail.url}
                  logo_uri={video.thumbnail.url}
                  channel_name={video.channelName}
                  channel_view={video.views}
                  time={video.uploadedAt}
                  id={video.id}

                  
                  
                  
                  
                  ></Videocard>
                );

              })
            }
            
            

            
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
