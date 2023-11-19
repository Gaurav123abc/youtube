import ".././CSS/homecomponent.css";
import Bar_card from "./bar_card";


const bar_logo= ["https://cdn.discordapp.com/attachments/1170627554017816626/1170723128918421554/home_1.png?ex=655a13e0&is=65479ee0&hm=40277efe3597bf59b28e74343be361f307244fdf406951d0177c8ac993ad187d&","https://cdn.discordapp.com/attachments/1170627554017816626/1170753852572717186/menu_youtube_social_media_subs_subscription_icon_197393.png?ex=655a307e&is=6547bb7e&hm=7f56fab55338fac61a3db831a0de5f7638fd848ac4bde96f2ce1e8c4e3096bb9&","https://cdn.discordapp.com/attachments/1170627554017816626/1170754127068942367/youtube-shorts-logo-15251.png?ex=655a30bf&is=6547bbbf&hm=00b9b7d17ae7fcff44d9fcf75eeaf567e439be941bcba9dca960787d1d295d49&"];


const sub = ["https://yt3.ggpht.com/lMAY3t4inrnUH_ebLWrmJbHyZhrZ_Lk59xANfEbgMjLA-9OBXNOPB1GbA466xhGIIhqiq_iq6g=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/2kw8s66dhLUegJ3XrqZSkZMfp77CRhCfYm1NurDwDB2L9sT_-CaoUix_iWjoE_t66b07JzoR=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/ytc/APkrFKbhFd6i2RbrBXhgqZrllASAV1o8i4NMseLzbhJz=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/m_e5-z-5EPsn5-qRZkx9amJhVdZk_jJxwDY_GeQbO0HDoJZF7TCtdZZEWWFFYT3nFFE7paNT=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/uUfOrEH3ZGDTadl_LVSJlBSQrjZ96CMbIZMUtUeqJhHvgM7xcykdgysscHTd3XALYPVLHelmKg=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/sPNKh1oeXjr8SFCWOe7EhOlkHTdpp6QMSaNitgU2H9dkuEvfouWqvQep8Ix6B_Z8o-Wvid3ukw=s88-c-k-c0x00ffffff-no-rj","https://yt3.ggpht.com/Q26T3a8aWgzNfu7H6akx8N_OXwcRuWlJFTgxMwuDYmn4uqaZ0mYqMP76UE2_KrPrm4NT5PRh3g=s88-c-k-c0x00ffffff-no-rj"];



function Sidebar() {
    return(
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




    );
}

export default Sidebar;