import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const imgUrl='https://image.tmdb.org/t/p/original'
const url="https://api.themoviedb.org/3";
const popular="popular";
const apiKey="e62679c9f2a1ba54bfae1058a0f54eee";
function Movies() {
  const [AllMovie,setAllMovie]=useState([]);
  useEffect(()=>{
   // https://api.themoviedb.org/3/tv/popular?api_key=e62679c9f2a1ba54bfae1058a0f54eee&language=en-US&page=1
    const AllMovies=async()=>{
      const {data:{results}}=await axios.get(`${url}/person/${popular}?api_key=${apiKey}`)
      setAllMovie(results) 
    }
     AllMovies();

  },[])
  return  (<div >
  <div className="heading">
    <h1>Popular Person</h1></div>

<div className="img-for">
 
    {
      AllMovie.map((item)=>(
        <img key={item.id} src={`${imgUrl}/${item.profile_path}`} alt="" />
      ))
    }
</div>
</div>);
}

export default Movies;
