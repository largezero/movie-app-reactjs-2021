import PropTypes from "prop-types";

function Movie ({id, movie}) {
  return (
  <div key={id}>
    <h2>Title: {movie.title}</h2>
    <img src={movie.medium_cover_image} alt={movie.title} />
    <p>Summary: {movie.summary}</p>
    <ul>Genres: {movie.genres.map( (g, i) => <li key={i}>{g}</li>)}</ul>
  </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
}

export default Movie;