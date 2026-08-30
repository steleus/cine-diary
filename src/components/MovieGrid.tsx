import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}

function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;







