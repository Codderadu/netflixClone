import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const imgUrl='https://image.tmdb.org/t/p/original'
const url="https://api.themoviedb.org/3";
const recentlyAdded="top_rated";
const apiKey="e62679c9f2a1ba54bfae1058a0f54eee";
function RecentlyAdd() {
  const [recentAdd,setRecentAdd]=useState([]);
  useEffect(()=>{
   // https://api.themoviedb.org/3/tv/popular?api_key=e62679c9f2a1ba54bfae1058a0f54eee&language=en-US&page=1
    const recentlyAdd=async()=>{
      const {data:{results}}=await axios.get(`${url}/tv/${recentlyAdded}?api_key=${apiKey}`)
      setRecentAdd(results)
      
    }
     recentlyAdd();

  },[])
  return (
    <div >
      <div className="heading">
        <h1>Recently Added</h1></div>
    
    <div className="img-for">
     
        {
        recentAdd.map((item)=>(
            <img key={item.id} src={`${imgUrl}/${item.poster_path}`} alt="" />
          ))
        }
  </div>
  </div>);
}

export default RecentlyAdd;
