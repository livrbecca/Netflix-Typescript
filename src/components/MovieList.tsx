import Movie from "./Movie";

export interface MovieData {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
}

interface MovieListProps {
  movies: MovieData[];
}

function MovieList(props: MovieListProps): JSX.Element {
  console.log("log", props.movies);
  return (
    <>
      {props.movies.map((movie, key) => (
        <div className="item">
          <Movie movie={movie} key={key} />
        </div>
      ))}
    </>
  );
}

export default MovieList;
