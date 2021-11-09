import {  useState,useEffect } from "react";
import { Movie } from './Movie';


 export function Movielist() {
  const [movielist, setMovielist] = useState([]);
  const [movies,setMovies]=useState([]);

  const getMovies=()=>{
    fetch("https://6188a6edd0821900178d7435.mockapi.io/movies",
    {method:"GET",})
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs));
           
  }
  useEffect(()=>getMovies(),[])
  
  return (
    
     
      <div className="movie_list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            pic={mv.pic}
            summary={mv.summary}
            rating={mv.rating} 
            id={mv.id}
            movielist={movielist}
            setMovielist={setMovielist}
            getMovies={getMovies}
           
            />
        ))}

        
      </div>
    
  );

}
