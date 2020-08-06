import React, { Component } from 'react'
import playlistVideos from '../../content/playlist.json'



// Playlist subcomponent
const Playlist = (props) => {

  return (
    <div>
        <ul>
          {playlistVideos.map((data, index) => {
            return <li key={`video_${index}`} onClick={props.playSelectedVideo} data-index={index}>{data.title}</li>
          })}
        </ul>
      </div>
  )
        }

class VideoPlayer extends Component {

    state = {
      //'playingVideo': false
    };

    videoStyles = {
      width: '100%'
    };

    playSelectedVideo = (e) => {
      console.log(e.target.dataset.index);

      const videoPlayer = this.refs.vidRef;
      videoPlayer.pause()

      videoPlayer.src = `../assets/${playlistVideos[e.target.dataset.index].source}.mp4`;
    }

    render () {
      return (
        <div>
          <video id="vid" ref="vidRef" src={`../assets/${playlistVideos[0].source}.mp4`} controls autoPlay muted style={this.videoStyles} />
          <Playlist playSelectedVideo={this.playSelectedVideo}/>
        </div>
      )
    }
  }

  export default VideoPlayer;