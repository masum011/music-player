import React from "react";

const Song = ({correntSong}) => {
  return (
    <div className="song-contaner">
      <img src={correntSong.conver} alt="cover"/>
      <h1>{correntSong.name}</h1>
      <h1>{correntSong.artist}</h1>
    </div>
  );
};
export default Song;
