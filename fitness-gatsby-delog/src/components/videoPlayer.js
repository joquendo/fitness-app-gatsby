import React, { Component } from 'react'
import playlistVideos from '../../content/playlist.json'
import VideoPlaylist from './videoPlaylist'

class VideoPlayer extends Component {

    state = {
      //'playingVideo': false
    };

    videoStyles = {
      width: '100%'
    };

    playSelectedVideo = (e) => {
      const videoPlayer = this.refs.vidRef;
      videoPlayer.src = `../assets/video-${playlistVideos[e.currentTarget.dataset.index].name}.mp4`;
    }

    render () {
      return (
        <div>
          <video id="vid" ref="vidRef" src={`../assets/video-${playlistVideos[0].name}.mp4`} controls autoPlay muted style={this.videoStyles} />
          <VideoPlaylist playSelectedVideo={this.playSelectedVideo} playlistVideos={playlistVideos} />
        </div>
      )
    }
  }

  export default VideoPlayer;