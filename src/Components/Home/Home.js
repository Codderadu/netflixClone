import React, { useEffect, useState } from "react";
import './Home.scss'
import axios from 'axios';
import {Link} from "react-router-dom"



const apiKey="e62679c9f2a1ba54bfae1058a0f54eee";
const url="https://api.themoviedb.org/3";
const popular="popular";
const topReted='top_rated'
const upComing='upcoming'
const latest='now_playing'
const imgUrl='https://image.tmdb.org/t/p/original'

const Card=({img})=>(
  <img className="card" src={img} alt="cover" />
)

const Row=({title,arr=[
]})=>(
  <div className="row">
    <h2>{title}</h2>
    <div>{
        arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
        ))
        }
    </div>
  </div>
)

function Home() {
 
  const [PopularMovies,setPopularMovies]=useState([]);
  const[topRate,setToprate]=useState([]);
  const [upComingMovies,setUpComingMovies]=useState([]);
  const [letastMovies,setLetastMovies]=useState([]);

  
  useEffect(()=>{
           const Popular=async()=>{
            try {
              const {data:{results},}=await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
                setPopularMovies(results)
                console.log(PopularMovies);

                 
            } catch (error) {
              console.log(error);
            }
           }

           const topRated=async()=>{
            try {
              const {data:{results}}=await axios.get(`${url}/movie/${topReted}?api_key=${apiKey}`);
                setToprate(results)
                
              
            } catch (error) {
              console.log(error);
            }
           }

           const up_coming=async()=>{
            try {
              const {data:{results},}=await axios.get(`${url}/movie/${upComing}?api_key=${apiKey}`);
                setUpComingMovies(results)
              
              
            } catch (error) {
              console.log(error);
            }
           }

           const latestMovies=async()=>{
            try {
              const {data:{results},}=await axios.get(`${url}/movie/${latest}?api_key=${apiKey}`);
            
                setLetastMovies(results)
              
            } catch (error) {
              console.log(error);
            }
           }

          //  const genreMovie=async()=>{
          //   try {
          //     const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
            
          //       setTypeMovie(genres)
          //       console.log(typeMovie);
              
          //   } catch (error) {
          //     console.log(error);
          //   }
          //  }
       
           Popular();
           topRated();
           up_coming();
           latestMovies();

          
  },[])
 
  
  return (
    <section className="home">
      <div className="banner"
       style={
        {backgroundImage:PopularMovies[0]?`url(${`${imgUrl}/${PopularMovies[0].poster_path}`})`:"rgb(16 16 16)"}
      }>
        {/* <h1>{PopularMovies[0].title}</h1> */}
      </div>
      
      <Row title={"Popular on netflix"} arr={PopularMovies}/>
         
      <Row title={"Top_Rated"} arr={topRate}/>
         
      <Row title={"UpComing Movies"} arr={upComingMovies}/>
         
      <Row title={"Latest"} arr={letastMovies}/>

      <div className="genreBox">
        
       {
        // genreMovies.map((item)=>{
        //   <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        // })
       
       }
        
      </div>
      </section>
      
  );
}

export default Home;
