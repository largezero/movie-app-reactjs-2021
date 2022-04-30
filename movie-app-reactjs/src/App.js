import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&order_by=desc`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect( () => { 
    getMovies() 
  } , [] );

  return (
    <div>
      { loading ? <h1>Loading...</h1> : 
        <div>
          { movies.map( (movie) => ( 
            <div key={movie.id}>
              <h2>Title: {movie.title}</h2>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <p>Summary: {movie.summary}</p>
              <ul>Genres: {movie.genres.map( (g, i) => <li key={i}>{g}</li>)}</ul>
            </div>
          ) ) }
        </div> 
      }
    </div>
  );
}

export default App;
