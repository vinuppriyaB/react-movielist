import { useState,useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
// import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

//  import { useParams } from "react-router-dom";

export function Movie({
  name,
  pic,
  summary,
  rating,
  trailer,
  id,
  setMovielist,
  movielist,
  getMovies,
  
}) {
  // const styles={display:show ? "block":"none"};
  const [show, setShow] = useState(false);
  const history = useHistory();
  //   const { id } = useParams();

  
  const deleteMovies=(id)=>{
    fetch("https://movies-shown.herokuapp.com/movies/"+id,
    {method:"DELETE",}).then(()=>getMovies())
          
  }
  

  return (
    <Card>
      <div className="box">
        <img className="movie_image" src={pic} alt={name} />
        <CardContent>
          <div className="content">
            <div className="movie_heading">
              <p className="movie_name"> {name}</p>
              <IconButton
                onClick={() => history.push("/movie/" + id)}
                color="primary"
                aria-label="movie_details"
              >
                <InfoIcon />
              </IconButton>

              <IconButton
                onClick={() => setShow(!show)}
                color="primary"
                aria-label={show ? "Hide" : "Show"}
                component="span"
              >
                {show ? (
                  <ExpandLessIcon className="hide_show_btn" />
                ) : (
                  <ExpandMoreIcon className="hide_show_btn" />
                )}
              </IconButton>

              <p className="movie_rating">⭐{rating}</p>
            </div>
            <div className="movie_summary">
              {/* <p style={styles}>{summary}</p> */}
              {show ? <p>{summary}</p> : ""}
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Counter />
          {/* <div className="delete-edit-btn"> */}
          <IconButton
            onClick={() => {
              

              history.push("/movie/edit/" + id);
            }}
            style={{ marginLeft: "auto" }}
            aria-label="delete"
            color="primary"
            size="large"
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => { deleteMovies(id) }}
              // console.log(id + " " + movielist);
              // let currentlist = movielist.filter((mv, index) => index !== id);
              // setMovielist(currentlist);
             
              

                    
            aria-label="delete"
            color="error"
            size="large"
          >
            <DeleteIcon />
          </IconButton>

          {/* <Button 
          onClick={() => {
            setcMovielist(movielist.filter((mv,index)=> (index===mv.id)));
              history.push("/edit")
          
                
        } }
             variant="contained"
             >Edit</Button>     */}

          {/* </div> */}
        </CardActions>
      </div>
    </Card>
  );
}
