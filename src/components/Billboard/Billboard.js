import React from "react";
import "./Billboard.css";
const Billboard = () => {
  return (
    <div>
      <h3>Some of the gretest of all time ...</h3>
      <h4>Playlist</h4>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLdk9bhyZOKV7qXoXl13KcXiQIkw331O5G"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <h4>Current Top Chart</h4>
      <embed
        type="text/html"
        src="https://www.billboard.com/charts"
        width="1000"
        height="900"
      ></embed>
    </div>
  );
};

export default Billboard;
