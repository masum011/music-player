// import './style/app.scss';
import { useState } from "react";
import "./style/app.scss";

import Player from "./components/Player";
import Song from "./components/Song";

import data from './util';

function App() {
  const [song,setSong]=useState(data());
  const [correntSong,setcorrentSong]=useState(song[0]);
  const [isPlaying,setIsPlaying]=useState(false);
  // console.log(correntSong);
  return (
    <div className="App">
      <Song correntSong={correntSong}/>
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} correntSong={correntSong}/>
    </div>
  );
}

export default App;
