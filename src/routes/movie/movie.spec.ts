import { IMovieService, IMovie } from "./movie.types";
import MoviesService from "./movie.service";

const moviesService: IMovieService = new MoviesService();

describe("Movies API", () => {
  it("should create a new movie", () => {
    const movieData: IMovie = {
      name: "Pirates of the caribbean",
      rating: 8.5
    };

    const movie: object = moviesService.addMovie(movieData);

    expect(movie).toEqual(movieData);
  });
});
