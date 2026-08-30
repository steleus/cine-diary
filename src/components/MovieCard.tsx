import type { Movie } from '../types/Movie';

interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.type === 'movie' ? 'Film' : 'Dizi'}</p>
            <p>⭐ {movie.rating}</p>
            <p>{movie.description}</p>

        </div>
    );
}

export default MovieCard;
