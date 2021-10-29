import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function EditDetail({ movielist, setMovielist }) {
    const {id}=useParams();
    const movie= movielist[id];
    let history = useHistory();
  const [name, setName] = useState(movie.name);
  const [pic, setPic] = useState(movie.pic);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  

 
  const resetMovieForm = (event) => {
    setName("");
    setPic("");
    setSummary("");
    setRating("");
    setTrailer("");
  };

  const updateMovie = () => {
    console.log("before   " + movielist);
    const updated_detail={ name, pic, summary, rating, trailer }
    const movielistcopy=[...movielist]
    movielistcopy[id]=updated_detail
    
    setMovielist(movielistcopy);
    console.log("after  " + movielist);
    resetMovieForm();
  };
  return (
    <div className="input_field">
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        value={name}
        onChange={event => setName(event.target.value)} />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Poster Link"
        variant="outlined"
        value={pic}
        onChange={event => setPic(event.target.value)} />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={event => setSummary(event.target.value)} />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={event => setRating(event.target.value)} />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Tailer"
        variant="outlined"
        value={trailer}
        onChange={event => setRating(event.target.value)} />
      <Button
        variant="contained"
        onClick={() => {
            updateMovie();
            history.goBack();
           
        }}
      >
        Add Movie</Button>



    </div>
  );
}
