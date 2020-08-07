import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './videoPlaylist.component.scss'

const VideoPlaylist = (props) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {extension: {eq: "png"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <div id="playlist">
        <ul>
          {props.playlistVideos.map((playlistVideo, index) => {
            return <li key={`video_${index}`}>
              <button onClick={props.playSelectedVideo} data-index={index}>
                <figure>
                  <Img
                    fluid={data.allFile.edges[index].node.childImageSharp.fluid}
                    alt={playlistVideo.title}
                  />
                  <figcaption>{playlistVideo.title}</figcaption>
                </figure>
              </button>
              </li>
          })}
        </ul>
      </div>
  )
}

export default VideoPlaylist