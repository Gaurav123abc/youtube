import ".././CSS/homecomponent.css";
import Header from "./header";
import "../CSS/videogrid.css";
import Videogrid from "./videogrid";
import videos from ".././videos.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// import React, { Component } from 'react';
import React, { useRef, useEffect } from 'react';
// import React, {Component} from 'react';

function VideoComp (props) {
    // const id = props.id;
    const params = useParams();
    const id = params.id;
    const link = "https://www.youtube.com/embed/"+ id +"?rel=0&mute=1&autoplay=0";
    const video = videos.find(finderfunction)

    function finderfunction(video) {
        return video.id === id;
    }

    const vid_data = video;
    
    const [like, Setlike] = useState(0);
    
    function Likeclickchange() {
        let likes = like + 1;
        Setlike(likes)
        LikeRef.current.style.backgroundColor = 'black';
        LikeRef.current.style.color = "white";
    }

    function Sub_change() {
        subRef.current.innerHTML="Subscribed";
        subRef.current.style.backgroundColor = "rgb(196, 196, 196)";
        subRef.current.style.color = "black";
        subRef.current.style.border = "1px";


    }
    

    const LikeRef = useRef(null);
    const subRef = useRef(null);

    function changeColor(){
        if (LikeRef.current) {
            
          }
    }

    
    useEffect(changeColor, [like]);

    // const like_btn = document.getElementById("like");
    // console.log(like_btn);
    // like_btn.style.backgroundColor = "black";

    
    return(

        <div className="main">
            <Header></Header>
            <div className="VideoContainer">

                <div className="Video">
                    <div className="play-area">
                    <iframe width="960" height="498" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
                    </div>
                    <div className="play-data">
                        <div className="vid-title">{vid_data.title}</div>
                        <div className="vid-data">
                            <div className="sec-1">
                                <img className="ico" src={vid_data.thumbnail.url} alt=""></img>
                                <div className="name">
                                    
                                    <div className="channel-name">{vid_data.channelName}</div>
                                    <div className="channel-Sub">Null Subscribers</div>
                                    
                                </div>
                                <button onClick={Sub_change} className="Sub-btn" ref={subRef}>Subscribe</button>
                                
                            </div>
                            <div className="section2">
                                <div className="feel">
                                    <button ref={LikeRef}
                                    onClick={Likeclickchange} className="liked">{like}   Likes</button>
                                    <button className="dislike">Dislike</button>
                                </div>
                                <button className="share">Share</button>
                            </div>
                        </div>
                        <div className="vid-description">{vid_data.description}</div>
                    </div>
                </div>

                
                <div className="Video-bar">

                    {
                        videos.map(function(video){

                            return(
                                <Videogrid
                                thumbnail_uri={video.thumbnail.url}
                                grid_title={video.title}
                                grid_channel={video.channelName}
                                grid_channel_data={video.views}
                                sub_id = {video.id}
                                
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