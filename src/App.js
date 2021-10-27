
import './App.css';
import { Movielist } from './Movielist';
import {ColorList} from './ColorList';
import {Welcome} from './Welcome';
import { AddMovie } from './AddMovie';
import { useState } from "react";
import { Switch, Route, Link, Redirect ,useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';





function App() {
  let initial_movielist = [
    {
      name: "Ratatouille",
      pic: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b18044415b238c004e702aaf1dc693daf886d9dadf4b78e1b1bcc0b9df10f8c._RI_V_TTW_.jpg",
      summary: "Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually gets the chance to prove his culinary abilities to a great food critic but is the food good? A Pixar animation.",
      rating: "8 ",
      trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w" 
    },
    {
      name: "Alita:Battle Angle",
      pic: "https://proseandcomiccons.files.wordpress.com/2019/02/slick-new-poster-for-alita-battle-angel1.jpg?w=640",
      summary: "Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor who takes the unconscious cyborg Alita to his clinic. When Alita awakens, she has no memory of who she is, nor does she have any recognition of the world she finds herself in. As Alita learns to navigate her new life and the treacherous streets of Iron City, Ido tries to shield her from her mysterious past.",
      rating: " 7.7",
      trailer:"https://www.youtube.com/embed/cislZ9S0ocA" 
      
    },
    {
      name: "City Hunter",
      pic: "https://static.xemovie.com/images/Film/Series/City%20hunter.jpg",
      summary: "In 1983, the South Korean president and his delegates are visiting Burma when a bomb planted by North Korean agents explodes, killing some high-ranking officials. This historical event is called the Rangoon bombing (also known as the Rangoon incident).",
      rating: "8.1",
      trailer:"https://www.youtube.com/embed/YGr706kT7SM" 
    },
    {
      name: " Interstellar",
      pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",

      summary: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
      rating: " 8.7",
      trailer:"https://www.youtube.com/embed/zSWdZVtXT7E" 
    },
    {
      name: "Matrix",
      pic: "https://i.pinimg.com/originals/32/8a/e4/328ae47c2f46f03447a4825a476a3391.jpg",
      summary: "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
      rating: " 8.7",
      trailer:"https://www.youtube.com/embed/9ix7TUGVYIo" 
    }
  ];
  const [movielist, setMovielist] = useState(initial_movielist);
 
  
  return(
    <div className="App">
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/movie/add">Add Movie</Link>
        </li>
        <li>
        <Link to="/movie">movie</Link>
          
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/color">color</Link>
        </li>
      </ul>

      <hr />

     
      <Switch>  
      <Route path="/film">
         <Redirect to="/movie"/>
        </Route>
        
        <Route path="/movie/add">
          <AddMovie movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails  movielist={movielist}/>
        </Route>
        <Route path="/movie">
          <Movielist  movielist={movielist} />
        </Route>
        <Route path="/color">
          <ColorList/>
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  
  );
  
 
}
function NotFound(){
  return(
    <div>
      <p className="not-found">404 ERROR</p>
    <img 
    height="100%"
    width="100%"
    src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" 
    alt="404 ERROR" 
    />
    </div>
  )
}
function MovieDetails({movielist})
{
  let history = useHistory();
  
  const {id}=useParams();
  
  const movie=movielist[id]
 
  return(
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
          <div >
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

  )
    
}



export default App;
