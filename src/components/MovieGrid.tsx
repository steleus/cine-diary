import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

interface MovieGridProps {
    movies: Movie[];
}

function MovieGrid({ movies }: MovieGridProps) {
    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>

    );
}
export default MovieGrid;










