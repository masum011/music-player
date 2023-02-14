import {React,useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Player=({correntSong,isPlaying,setIsPlaying})=> {
  const audioref= useRef(null);

  const playsongHandler=( )=>{
    // console.log(audioref.current);
    // audioref.current.play();
    if(isPlaying){
      audioref.current.pause();
    }else{
      audioref.current.play();
    }
  }


  return (
    <div className="player">
        <div className="time-control">
            <p>Start time</p>
            <input type="range" />
            <p>End time</p>
        </div>
        <div className="play-conntrol">
            <FontAwesomeIcon className="skip-back" size="2x " icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playsongHandler}  className="play" size="2x" icon={faPlay}/>
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
        </div>
        
        <audio ref={audioref} src={correntSong.audio}/>
    </div>
  );
};

export default Player;
