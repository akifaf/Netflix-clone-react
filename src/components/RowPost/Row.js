import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../constants/axios'
import { API_key, imageURL } from '../../constants/constants'
import YouTube from 'react-youtube'

function Row(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState("")

  useEffect(() => {
    axios.get(props.url).then
    ((response) => {
      setMovies(response.data.results)
      // console.log(response.data.results)
    }).catch(err  => {
      alert('Network error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function handleMovieTrailer(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_key}`).then(response => {
      console.log(response)
      if(response.data.results.length!==0) {
        setUrlId(response.data.results[0])
      } else if(response.status === 404) {
        console.log("Array empty")
      }
    })
  }
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className="posters">

    {movies.map((movie) => 
        <img onClick={() => handleMovieTrailer(movie.id)} className= {props.isSmall ? "smallPoster" : "poster"}  src={`${imageURL+movie.backdrop_path}`} alt="" />
    )}

    </div>
    { urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default Row