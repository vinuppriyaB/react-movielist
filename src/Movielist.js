
import { Movie } from './Movie';


 export function Movielist({movielist,setMovielist}) {
  
  return (
    
     
      <div className="movie_list">
        {movielist.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            pic={mv.pic}
            summary={mv.summary}
            rating={mv.rating} 
            id={index}
            movielist={movielist}
            setMovielist={setMovielist}
           
            />
        ))}

        
      </div>
    
  );

}
