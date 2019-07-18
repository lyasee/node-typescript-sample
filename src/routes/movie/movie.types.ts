export interface IMovieService {
  addMovie(movie: IMovie): IMovie;
  getMovies(): IMovie[];
}

export interface IMovie {
  name: string;
  rating: number;
}
