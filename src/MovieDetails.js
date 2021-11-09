import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import {  useState,useEffect } from "react";

export function MovieDetails() {

  let history = useHistory();

  const { id } = useParams();

  // const movie = movielist[id];
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    fetch("https://6188a6edd0821900178d7435.mockapi.io/movies/"+id)
.then(data=>data.json())
.then(mvn=>
    setMovie(mvn))
    
  },[])

  return (
    <div className="movie-trailer">
      <div>
        <iframe
          width="1000"
          height="720"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

      </div>

      <div className="display-content">
        <CardContent>
          <div>
            <p className="movie_name"> {movie.name} <span className="movie_rating">⭐{movie.rating}</span></p>
          </div>
          <div className="movie_summary">
            <p>{movie.summary}</p>
          </div>
        </CardContent>
      </div>

      <Button
        onClick={() => {
          history.goBack();
        }}
        variant="contained">Back</Button>

    </div>

  );

}
