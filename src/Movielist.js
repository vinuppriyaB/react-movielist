
import { Movie } from './Movie';


 export function Movielist({movielist}) {
  
  return (
    <section>
     
      <div className="movie_list">
        {movielist.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            pic={mv.pic}
            summary={mv.summary}
            rating={mv.rating} 
            id={index}/>
        ))}
      </div>
    </section>
  );

}
