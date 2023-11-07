import ".././CSS/homecomponent.css";
import "../CSS/sidebar.css";
import Videocard from "./Videocard";
import Bar_card from "./bar_card";
import "../CSS/videopage.css";
import videos from ".././videos.json";
import channel from ".././channel.json";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";


// import "th1.jpg"

const thunmnail_array = ["https://i.ytimg.com/vi/Seb3lULQruE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0VWl81lgqM7Hr0Tm-7axmD-3xzA","https://i.ytimg.com/vi/yqqaW8DCc-I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcmObtixo54axsCswupU1Sbpbmzw","https://media.discordapp.net/attachments/829976806776897556/1170627553757773865/th6.jpg?ex=6559bade&is=654745de&hm=d14c5dfd50eacfa7ddc612ef655259d9cf937096f4f6b4b8685f3626a2291ae3&=&width=986&height=554"];

const logo_array = ["https://yt3.ggpht.com/ytc/APkrFKbgpcu4OB5po9mJ-eD229vZrdW9JXws03uJjuOasQ=s68-c-k-c0x00ffffff-no-rj","https://yt3.googleusercontent.com/ytc/APkrFKbsRG8lw574LsQvXESKkrIwHeJTtoH0kw9CJdejINk=s176-c-k-c0x00ffffff-no-rj","https://media.licdn.com/dms/image/C4D0BAQEPrlm8-72Meg/company-logo_200_200/0/1656675901242/labour_law_advisor_logo?e=2147483647&v=beta&t=xN8NxNi4buGsylR0omR1ityA6-HAM9MPr41LGFqczBc"]; 

const bar_logo= ["https://cdn.discordapp.com/attachments/1170627554017816626/1170723128918421554/home_1.png?ex=655a13e0&is=65479ee0&hm=40277efe3597bf59b28e74343be361f307244fdf406951d0177c8ac993ad187d&","https://cdn.discordapp.com/attachments/1170627554017816626/1170753852572717186/menu_youtube_social_media_subs_subscription_icon_197393.png?ex=655a307e&is=6547bb7e&hm=7f56fab55338fac61a3db831a0de5f7638fd848ac4bde96f2ce1e8c4e3096bb9&","https://cdn.discordapp.com/attachments/1170627554017816626/1170754127068942367/youtube-shorts-logo-15251.png?ex=655a30bf&is=6547bbbf&hm=00b9b7d17ae7fcff44d9fcf75eeaf567e439be941bcba9dca960787d1d295d49&"];


const sub = ["https://yt3.ggpht.com/lMAY3t4inrnUH_ebLWrmJbHyZhrZ_Lk59xANfEbgMjLA-9OBXNOPB1GbA466xhGIIhqiq_iq6g=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/ytc/APkrFKbhFd6i2RbrBXhgqZrllASAV1o8i4NMseLzbhJz=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/m_e5-z-5EPsn5-qRZkx9amJhVdZk_jJxwDY_GeQbO0HDoJZF7TCtdZZEWWFFYT3nFFE7paNT=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/uUfOrEH3ZGDTadl_LVSJlBSQrjZ96CMbIZMUtUeqJhHvgM7xcykdgysscHTd3XALYPVLHelmKg=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/sPNKh1oeXjr8SFCWOe7EhOlkHTdpp6QMSaNitgU2H9dkuEvfouWqvQep8Ix6B_Z8o-Wvid3ukw=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/Q26T3a8aWgzNfu7H6akx8N_OXwcRuWlJFTgxMwuDYmn4uqaZ0mYqMP76UE2_KrPrm4NT5PRh3g=s88-c-k-c0x00ffffff-no-rj"];


function HomeComp() {

 


  return (
    <div className="parent">
      <div className="header">
      
        <div className="head-sec1">
        <Link to="/">
          <img className="logo" src="https://cdn.discordapp.com/attachments/829976806776897556/1170612671180197959/youtube.png?ex=6559ad01&is=65473801&hm=938d757c6cdca4ecb56fc803f2fa2f9079b011075f0e948a97b6f5937e8c9e11&" alt=""></img>
          </Link>
          <div className="logo-text">Youtube</div>
        </div>
        
        <div className="head-sec2">
          <input className="searchbox" placeholder="Search Here" type="text"></input>
          <button className="search-button">
          <img className="search-button-image" src="https://cdn.discordapp.com/attachments/1170627554017816626/1171287078743576686/search_1.png?ex=655c2119&is=6549ac19&hm=4665f03b9c1ae02aef8baca39441d0c89fc15e16330d587dd08387d7dfbbdf84&" alt=""></img></button>
        </div>
        <div className="">
            <form>
            <input className="head-sec3" type="button" value="Sign in"></input>
            </form>
          
        </div>
      </div>
      <div className="main-body">
        <div className="sidebar">
            <div className="home-options">
                <Bar_card logo_uri={bar_logo[0]} bar_text="Home"></Bar_card>
                <Bar_card logo_uri={bar_logo[1]} bar_text="Subscription"></Bar_card>
                <Bar_card logo_uri={bar_logo[2]} bar_text="Shorts"></Bar_card>
                
            </div>
            <div className="subscription">
                <div className="sub-head">Subscription</div>
                <div className="sub-data">
                
                <Bar_card logo_uri={sub[0]} bar_text="Mr Spherical"></Bar_card>
                
                <Bar_card logo_uri={sub[1]} bar_text="NASA"></Bar_card>

                <Bar_card logo_uri={sub[2]} bar_text="Aaron Rheins"></Bar_card>

                <Bar_card logo_uri={sub[3]} bar_text="Aevy TV"></Bar_card>

                <Bar_card logo_uri={sub[4]} bar_text="Arirack"></Bar_card>
                <Bar_card logo_uri={sub[5]} bar_text="Aditya Rihkari"></Bar_card>
                <Bar_card logo_uri={sub[6]} bar_text="AITelly"></Bar_card>  
                </div>
            </div>
            <div className="more">
                <div className="more-head">
                    More
                </div>
                <div className="more-data">
                <Bar_card></Bar_card>
                <Bar_card></Bar_card>
                <Bar_card></Bar_card>
                </div>
            </div>

        </div>
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
