import ".././CSS/homecomponent.css";
import Header from "./header";
import "../CSS/videogrid.css";
import Videogrid from "./videogrid";
import videos from "../videos.json"

function VideoComp () {

    return(

        <div className="main">
            <Header></Header>
            <div className="VideoContainer">

                <div className="Video">
                    <div className="play-area">
                    <iframe width="960" height="498" src="https://www.youtube.com/embed/n-PgPuFhrEY?si=1SPaIUmd0sLdHOlC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="play-data">
                        <div className="vid-title">Em Beihold - Numb Little Bug (Piano Version Video)</div>
                        <div className="vid-data">
                            <div className="section-1">
                                <img className="ico" src="" alt=""></img>
                                <div className="name">
                                    
                                    <div className="channel-name">EMBeihold</div>
                                    <div className="channel-Sub">1 Million Subscribers</div>
                                    
                                </div>
                                <input className="Sub-btn" type="button" value="Subscribe"></input>
                            </div>
                            <div className="section2">
                                <div className="feel">
                                    <input className="liked" type="button" value="Like"></input>
                                    <input className="dislike" type="button" value="Dislike"></input>
                                </div>
                                <input className="share" type="button" value="Share"></input>
                            </div>
                        </div>
                        <div className="vid-description">mai hoon description</div>
                    </div>
                </div>
                <div className="Video-bar">

                    {
                        videos.map(function(video){

                            return(
                                <Videogrid
                                thumbnail_uri={video.thumbnail}
                                grid_title={video.title}
                                grid_channel={video.channelName}
                                grid_channel_data={video.views}
                                
                                ></Videogrid>





                            );





                        })

                    }
                    
                    
                </div>



            </div>

        </div>



    );
}

export default VideoComp;