import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";


export function Movie({ name, pic, summary, rating ,id}) {

  // const styles={display:show ? "block":"none"};
  const [show, setShow] = useState(false);
  const history=useHistory();
  return (
    <Card>
      <div className="box">
        <img className="movie_image" src={pic} alt={name} />
        <CardContent>
          <div className="content">
            <div className="movie_heading">

              <p className="movie_name"> {name}</p>
              <IconButton 
              onClick={() => history.push("/movie/"+id)}
               
                color="primary" 
                aria-label="movie_details" 
                >
               <InfoIcon/> 
              </IconButton>
                   

              <IconButton onClick={() => 
                setShow(!show)} 
                color="primary" 
                aria-label={show ? "Hide" : "Show"} 
                component="span">
                {show ? <ExpandLessIcon className="hide_show_btn" /> : <ExpandMoreIcon className="hide_show_btn" />}
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
        </CardActions>
      </div>
    </Card>
  );
}
