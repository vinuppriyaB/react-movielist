import React from 'react';
import { useState,useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().min(3, "too small").required("cool name "),

  pic: yup.string().required("cool picture"),

  summary: yup.string().required("cool picture"),

  rating: yup.string().required("cool picture"),

  trailer: yup.string().required("cool picture"),
});

export function EditDetail() {
  const {id}=useParams();
  
  const [movie, setMovie] = useState(null);
  // const [name, setName] = useState("");
  // const [pic, setPic] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  
// const editMovie={ name:"",pic:"",rating:"",summary:"",trailer:"" };
  
  useEffect(()=>{
    fetch("https://movies-shown.herokuapp.com/movies/"+id)
.then((data)=>data.json())
.then((mvn)=>
    {console.log(mvn);
      setMovie(mvn);
      
      // setName(mvn.name);
      // setPic(mvn.pic);
      // setSummary(mvn.summary);
      // setRating(mvn.rating);
      // setTrailer(mvn.trailer);
    })
  },[])
  
    // const resetMovieForm = (event) => {
    //       setName("");
    //       setPic("");
    //       setSummary("");
    //       setRating("");
    //       setTrailer("");
    //     };

        
            
         

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
  
  return(
    <div>
      {movie ? <UpdateEditedmovie movie={movie}/> : ""}

    </div>

  )
  
}

export function UpdateEditedmovie({movie}){
  console.log("movie"+movie);
  let history = useHistory();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { name:movie.name,pic:movie.pic,rating:movie.rating,summary:movie.summary,trailer:movie.trailer },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("submit", newMovie);
        updateMovie(newMovie)
      },
    });
    const updateMovie = (newMovie) => {
              
      // const updated_detail={ name, pic, summary, rating, trailer }
      fetch("https://movie-projects.herokuapp.com/movies/"+movie.id,
      {
          method:"PUT",
          body: JSON.stringify(newMovie),
          headers:{"Content-Type":"application/json"},
      }).then(()=>{
          history.push("/movie");
          // resetMovieForm();
      }).catch((e)=> console.log("ERROR"))  
      
      
     
      // resetMovieForm();
    };  
  return (
    <form className="input_field" onSubmit={handleSubmit}>
      <TextField
        className="input_text"
        id="name"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Movie Name"
        variant="outlined"
        value={values.name}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}

        // onChange={(event) => setName(event.target.value)}
      />
      <TextField
        className="input_text"
        id="pic"
        name="pic"
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Poster Link"
        variant="outlined"
        value={values.pic}
        error={errors.pic && touched.pic}
        helperText={errors.pic && touched.pic && errors.pic}

        // onChange={(event) => setPic(event.target.value)}
      />
      <TextField
        className="input_text"
        id="summary"
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={values.summary}
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary && errors.summary}

        // onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        className="input_text"
        id="rating"
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={values.rating}
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating && errors.rating}

        // onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        className="input_text"
        id="trailer"
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        id="outlined-basic"
        label="Tailer"
        variant="outlined"
        value={values.trailer}
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer}

        // onChange={(event) => setRating(event.target.value)}
      />
      <Button
      type="submit"
        variant="contained"
        onClick={() => {
          updateMovie();
        }}
      >
        save
      </Button>
    </form>
  );

}
