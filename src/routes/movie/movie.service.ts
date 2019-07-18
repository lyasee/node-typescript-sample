import { IMovieService, IMovie } from "./movie.types";

const movies: IMovie[] = [];

export default class MoviceService implements IMovieService {
  public addMovie(movie: IMovie) {
    if (!instanceOfMovie(movie)) {
      throw new TypeError("Type Error");
    }

    movies.push(movie);
    return movie;
  }

  public getMovies() {
    return movies;
  }
}

function instanceOfMovie(object: any): object is IMovie {
  return "name" in object && "rating" in object;
}
