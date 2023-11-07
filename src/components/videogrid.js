function Videogrid(props) {
  const thumbnail_uri = props.thumbnail_uri;
  const grid_title = props.grid_title;
  const grid_channel = props.grid_channel;
  const grid_channel_data = props.grid_channel_data;

  return (
    <div className="gridcard">
      <img className="grid-thumbnail" src={thumbnail_uri} alt=""></img>

      <div className="grid-data">
        <div className="grid-data-title">{grid_title}</div>
        <div className="grid-data-channel">{grid_channel}</div>
        <div className="grid-data-chdata">{grid_channel_data} Subscriber</div>
      </div>
    </div>
  );
}

export default Videogrid;
