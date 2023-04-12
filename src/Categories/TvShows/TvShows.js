import "./TvShows.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const imgUrl='https://image.tmdb.org/t/p/original'
const url="https://api.themoviedb.org/3";
const popular="popular";
const apiKey="e62679c9f2a1ba54bfae1058a0f54eee";
function TvShows() {
     const [tvshow,setTvshow]=useState([]);
  useEffect(()=>{
   // https://api.themoviedb.org/3/tv/popular?api_key=e62679c9f2a1ba54bfae1058a0f54eee&language=en-US&page=1
    const TvShow=async()=>{
      const {data:{results}}=await axios.get(`${url}/tv/${popular}?api_key=${apiKey}`)
      setTvshow(results)
      
    }
     TvShow();

  },[])

  return (
    <div >
      <div className="heading">
        <h1>TVShows</h1></div>
    
    <div className="img-for">
     
        {
          tvshow.map((item)=>(
            <img key={item.id} src={`${imgUrl}/${item.poster_path}`} alt="" />
          ))
        }
  </div>
  </div>);
}

export default TvShows;
