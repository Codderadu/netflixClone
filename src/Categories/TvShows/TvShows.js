import axios from "axios";
import React, { useEffect, useState } from "react";

const url="https://api.themoviedb.org/3";
const apiKey="e62679c9f2a1ba54bfae1058a0f54eee";
const TvShowsLatest="tv/popular";

function TvShows() {

  const [populorTvShows,setPopularTvshows]=useState([]);
  useEffect(()=>{
    const TVshows=async()=>{
      const {data:{results},}=await axios.get(`${url}/${TvShowsLatest}?api_key=${apiKey}`);
      setPopularTvshows(results)
      
      // https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US
    }
      TVshows();   
  },[])
  return <div>
         {
          populorTvShows.map((item)=>{
                <div>
                  <h1 key={item.id}>{item.name}</h1>
                </div>
          })
         } 
  </div>;
}

export default TvShows;
