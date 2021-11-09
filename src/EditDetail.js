import React from 'react';
import { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function EditDetail() {
  const {id}=useParams();
  let history = useHistory();
  const [movie, setMovie] = useState([]);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  

  
  useEffect(()=>{
    fetch("https://6188a6edd0821900178d7435.mockapi.io/movies/"+id)
.then((data)=>data.json())
.then((mvn)=>
    {setMovie(mvn);
      setName(mvn.name);
      setPic(mvn.pic);
      setSummary(mvn.summary);
      setRating(mvn.rating);
      setTrailer(mvn.trailer);
    })
  },[])
  console.log(movie);
  
console.log(movie.name);
   
    console.log(name);
    const resetMovieForm = (event) => {
          setName("");
          setPic("");
          setSummary("");
          setRating("");
          setTrailer("");
        };

        const updateMovie = () => {
              
              const updated_detail={ name, pic, summary, rating, trailer }
              fetch("https://6188a6edd0821900178d7435.mockapi.io/movies/"+id,
              {
                  method:"PUT",
                  body: JSON.stringify(updated_detail),
                  headers:{"Content-Type":"application/json"},
              }).then(()=>{
                  history.push("/movie");
                  resetMovieForm();
              }).catch((e)=> console.log("ERROR"))  
              
              
             
              resetMovieForm();
            };  
            
         

// const [movielist,setMovielist]=useState([]);
//     let history = useHistory();
   
//     const movie= movielist[id];
//    console.log(movie)
//   const [name, setName] = useState(movie.name);
//   const [pic, setPic] = useState(movie.pic);
//   const [summary, setSummary] = useState(movie.summary);
//   const [rating, setRating] = useState(movie.rating);
//   const [trailer, setTrailer] = useState(movie.trailer);
  

 
//   const resetMovieForm = (event) => {
//     setName("");
//     setPic("");
//     setSummary("");
//     setRating("");
//     setTrailer("");
//   };

//   const updateMovie = () => {
//     console.log("before   " + movielist);
//     const updated_detail={ name, pic, summary, rating, trailer }
//     const movielistcopy=[...movielist]
//     movielistcopy[id]=updated_detail
    
//     setMovielist(movielistcopy);
//     console.log("after  " + movielist);
//     resetMovieForm();
  // };
  return (
    <div className="input_field">
      <h1>{id}</h1>
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Movie Name"
        variant="outlined"
        value={name}
        onChange={event => setName(event.target.value)} 
        />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Poster Link"
        variant="outlined"
        value={pic}
        onChange={event => setPic(event.target.value)} 
        />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={event => setSummary(event.target.value)} 
        />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={event => setRating(event.target.value)} 
        />
      <TextField
        className="input_text"
        id="outlined-basic"
        label="Tailer"
        variant="outlined"
        value={trailer}
        onChange={event => setRating(event.target.value)} 
        
        />
      <Button
        variant="contained"
        onClick={() => {
            updateMovie();
            
           
        }}
      >
        Save</Button>



    </div>
  );
}
