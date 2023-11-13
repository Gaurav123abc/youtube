import Searchcard from "./SearchCard";
import Header from "./header";
import ".././CSS/homecomponent.css";
import Sidebar from "./sidebar";
import "../CSS/searchgrid.css";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";




function SearchComp() {

    const params = useParams();
    const input_field = params.input_field;
    console.log(input_field);
    
    const [youtubeData, setYoutubeData] = useState(null);
    let jsonString;
    function retriveData(){
        jsonString = localStorage.getItem('youtubeData');
        const storedData = JSON.parse(jsonString);
        setYoutubeData(storedData);
    }

    useEffect(retriveData,[]);
    
    // function reload(){
    //     window.location.reload();
    // }

    // useEffect(reload,[]);

    return(
        <div  className="parent">
            <Header></Header>
            <div className="main-body">
                <Sidebar></Sidebar>
                <div className="video">
                    <div className="sideline">

                    </div>
                    <div className="videos-result">
                        {/* <Searchcard grid_thumbSC="https://cdn.discordapp.com/attachments/829976806776897556/1170627552348471367/th2.jpg?ex=6559badd&is=654745dd&hm=4524b4c9788d0902a72c07b14b52f34abb023c860c4e1c94554dd8a8c12e2c93&" grid_titleSC="Hi Im a Title" grid_chnameSC="Electroboom" grid_chviewsSC="3974239" grid_idSC="9fhiofjweo"></Searchcard> */}

                         
                        
                        {

                            youtubeData && youtubeData.items && (

                                youtubeData.items.map(function(item){
                                    return(
                                        <Searchcard
                                        grid_thumbSC={item.snippet.thumbnails.high.url}
                                        grid_titleSC={item.snippet.title}
                                        grid_chnameSC={item.snippet.channelTitle}
                                        grid_chdesSC={item.snippet.description}
                                        grid_idSC={item.id.videoId}
                                        ></Searchcard>
                                    );
                                })
                            )

                        }


                    </div>
                </div>
            </div>
        </div>
        

    );

}

export default SearchComp;