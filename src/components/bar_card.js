function Bar_card(props) {
    const logo_uri = props.logo_uri;
    const bar_text = props.bar_text;

    return(

        <div className="bar-card">
            <img className="bar-card-logo" src={logo_uri} alt=""></img>
            <div className="bar-card-text">{bar_text}</div>
        </div>


    );


}

export default Bar_card;