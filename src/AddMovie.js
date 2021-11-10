import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().min(3, "too small").required("cool name "),

  pic: yup.string().required("cool picture"),

  summary: yup.string().required("cool picture"),

  rating: yup.string().required("cool picture"),

  trailer: yup.string().required("cool picture"),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [pic, setPic] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();
  // const resetMovieForm = (event) => {
  //         setName("");
  //         setPic("");
  //         setSummary("");
  //         setRating("");
  //         setTrailer("")
  //     };
  const addMovie = (newMovie) => {
    // const newMovie={ name, pic, summary, rating,trailer };

    fetch("https://6188a6edd0821900178d7435.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        history.push("/movie");
        // resetMovieForm();
      })
      .catch((e) => console.log("ERROR"));
  };

  // const [movielist, setMovielist] = useState(movielist);

  // const resetMovieForm = (event) => {
  //     setName("");
  //     setPic("");
  //     setSummary("");
  //     setRating("");
  //     setTrailer("")
  // };

  // const addMovie = () => {
  //     console.log("before   "+movielist);
  //     setMovielist([{ name, pic, summary, rating,trailer }, ...movielist]);
  //     console.log("after  "+movielist);
  //     resetMovieForm();
  // };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { name:"",pic:"",rating:"",summary:"",trailer:"" },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("submit", newMovie);
        addMovie(newMovie)
      },
    });
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
          addMovie();
        }}
      >
        Add Movie
      </Button>
    </form>
  );
}
