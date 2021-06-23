/* eslint-disable jsx-a11y/anchor-is-valid */
import { MovieData } from "./MovieList";

interface MovieProps {
  movie: MovieData;
}

function Movie(props: MovieProps): JSX.Element {
  return (
    <div className='m-space'>
      {/* show these on hover */}
      {/* <h1>{props.movie.Title}</h1> */}
      {/* <h3>{props.movie.Year}</h3> */}
      <h4>{props.movie.Type}</h4>
      <a href="#">
        <img src={props.movie.Poster} alt={props.movie.Title} />
      </a>
    </div>
  );
}
export default Movie;
