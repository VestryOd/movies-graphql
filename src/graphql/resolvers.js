import { getMovies } from "./storage";

export const resolvers = {
  Query: {
    movies: () => getMovies(),
  }
}
