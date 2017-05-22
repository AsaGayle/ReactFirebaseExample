import React from 'react'

const VideoPlayer = (props) => {
    return(
    <div>
        <iframe 
        title="for your viewing pleasure"
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${props.videoID}?autoplay=1`}
        frameBorder="0" 
        allowFullScreen
        />
      </div>
    )
}

export default VideoPlayer;