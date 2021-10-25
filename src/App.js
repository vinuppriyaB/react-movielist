
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
function App() {
  return(
    <div>
      <Movielist/>
      {/* <ColorList/>
      <ColorBox /> */}
    </div>
  );
  
 
}
function ColorList(){
  
  const [color,setColor]=useState("orange");
  const initial_colors=["blue","yellow","black"]
  const [colors,setColors]=useState(initial_colors);
  const styles={backgroundColor:color,color:"black"};
  return(
    <div>
       <input
    value={color}
    style={styles}
    onChange={(event)=>setColor(event.target.value)}
    placeholder="enter color"
    />
    <button onClick={() => setColors([...colors,color])}> Add color</button>
    {colors.map((clr)=> (
    <ColorBox color={clr} />
    ))}
    </div>
  );
   
   
}
function ColorBox({color}){
  const styles={
    height:"70px",
    width:"200px",
    backgroundColor:color,
    margin:"10px 0px"
  }
  return(
    <div style={styles}></div>

  )
}
function Movielist(){
  let initial_movielist = [
    {
      name: "Ratatouille",
      pic:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b18044415b238c004e702aaf1dc693daf886d9dadf4b78e1b1bcc0b9df10f8c._RI_V_TTW_.jpg",
      summary:
        "Remy dreams of becoming a great chef, despite being a rat in a definitely rodent-phobic profession. He moves to Paris to follow his dream, and with the help of hapless garbage boy Linguini he puts his culinary skills to the test in the kitchen but he has to stay in hiding at the same time, with hilarious consequences. Remy eventually gets the chance to prove his culinary abilities to a great food critic but is the food good? A Pixar animation.",
      rating: "8 "
    },
    {
      name: "Alita:Battle Angle",
      pic:
        "https://proseandcomiccons.files.wordpress.com/2019/02/slick-new-poster-for-alita-battle-angel1.jpg?w=640",
      summary:
        "Set several centuries in the future, the abandoned Alita is found in the scrapyard of Iron City by Ido, a compassionate cyber-doctor who takes the unconscious cyborg Alita to his clinic. When Alita awakens, she has no memory of who she is, nor does she have any recognition of the world she finds herself in. As Alita learns to navigate her new life and the treacherous streets of Iron City, Ido tries to shield her from her mysterious past.",
        rating: " 7.7"
    },
    {
      name: "City Hunter",
      pic:
        "https://static.xemovie.com/images/Film/Series/City%20hunter.jpg",
      summary:
        "In 1983, the South Korean president and his delegates are visiting Burma when a bomb planted by North Korean agents explodes, killing some high-ranking officials. This historical event is called the Rangoon bombing (also known as the Rangoon incident).",
        rating: "8.1"
    },
    {
      name: " Interstellar",
      pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
       
      summary:
        "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
      rating: " 8.7"
    },
    {
      name: "Matrix",
      pic:
        "https://i.pinimg.com/originals/32/8a/e4/328ae47c2f46f03447a4825a476a3391.jpg",
           summary:
        "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
      rating: " 8.7"
    }
  ];
  

  const [moviename,setmovieName]=useState("");
  const [pic,setPic]=useState("");
  const [summary,setSummary]=useState("");
  const [rating,setRating]=useState("");
 
 const [movielist,setMovielist]=useState(initial_movielist)
  return (
    <div className="App">
      <div className="input_field">
      <TextField className="input_text" id="outlined-basic" label="Movie Name" variant="outlined" onChange={(event)=>setmovieName(event.target.value)} />
        <TextField className="input_text" id="outlined-basic" label="Poster Link" variant="outlined" onChange={(event)=>setPic(event.target.value)} />
        <TextField className="input_text" id="outlined-basic" label="Summary" variant="outlined" onChange={(event)=>setSummary(event.target.value)} />
        <TextField className="input_text" id="outlined-basic" label="Rating" variant="outlined" onChange={(event)=>setRating(event.target.value)} />
        
        <Button variant="contained" onClick={()=>{console.log(movielist); return setMovielist([{name:moviename, pic:pic, summary:summary, rating:rating},...movielist])}}>Add Movie</Button>

      </div>
       
      <div className="movie_list">
      {movielist.map((mv,index) => (
        <Movie
        key={index}
          name={mv.name}
          pic={mv.pic}
          summary={mv.summary}
          rating={mv.rating}
        />
      ))}

      </div>
      
    </div>
     );
  
}

function Movie({ name, pic, summary, rating }) {
  
  // const styles={display:show ? "block":"none"};
  const [show,setShow]=useState(false);
  return (
    <div className="box">
      <img className="movie_image" src={pic} alt={name} />
      <div className="content">
        <div className="movie_heading">
          <div className="movie_name">
            <p className="name"> {name}</p>
          </div>
          <div class="movie_rating">
            <p>⭐{rating}</p>
          </div>
          
        </div>

        <Counter />
        <div>
        <Button variant="contained" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</Button>
           
          </div>
        <div className="movie_summary">
          {/* <p style={styles}>{summary}</p> */}
          {show ? <p>{summary}</p>: ""}
        </div>
        

      </div>
      
    </div>
  );
}

function Counter(){
 // const like=1;
 const [like,setLike] =useState(0);
 const [dislike,setdisLike]=useState(0);
  return (
    <div className="like_dislike">
      
      <Button variant="text" className="like_dislike" onClick={()=>setLike(like + 1)}>👍{like}</Button>
      <Button variant="text" className="like_dislike" onClick={()=>setdisLike(dislike+1)}>👎{dislike}</Button>
    
    </div>
  )
}



export default App;
