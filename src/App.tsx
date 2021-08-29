import "./App.css";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import { MovieData } from "./components/MovieList";

function App() {
  // const gintamaFilms: MovieData[] = [
  //   {
  //     Title: "Gintama",
  //     Year: "2005–2018",
  //     imdbID: "tt0988818",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Gintama",
  //     Year: "2017",
  //     imdbID: "tt5805470",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMzkxNGZjMDQtYTEzNi00OTdkLWJkMTYtZmIwYjQ2NWFiY2M1XkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Gekijouban Gintama Kanketsu-hen: Yorozuyayo eien nare",
  //     Year: "2013",
  //     imdbID: "tt2374144",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BZDhmMTNkZjYtMjFhZi00OWY1LWEwMDAtNGYxMDk5ZjIxMjkyXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg",
  //   },
  // ];

  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(movies);

  const getMovieRequest = async (searchValue: string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bf5f2b2b`;
    console.log("search value", searchValue);

    const response: Response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
    // setMovies(responseJSON.Search); - mistake, having this twice caused error, why?
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="A">
      <div className="head">
        <MovieListHeading heading={"LivFlix".toUpperCase()} />
      </div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue ? (
        <div className="container">
          <MovieList movies={movies} />
        </div>
      ) : (
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "60px",
            marginTop: "10%",
          }}
        >
          Search for a series for film to begin...
        </h2>
      )}
    </div>
  );
}

export default App;
