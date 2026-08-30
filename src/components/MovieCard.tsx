import type { Movie } from '../types/Movie';
import {useWatchlist} from "../context/WatchlistContext";


interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    const inWatchlist = isInWatchlist(movie.id);




    return (
        <div>
            <img src={movie.poster ?? ""} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.type === 'movie' ? 'Film' : 'Dizi'}</p>
            <p>⭐ {movie.rating}</p>
            <p>{movie.description}</p>

            <button onClick={() => inWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)}>
                {inWatchlist ? 'Listeden Kaldır' : 'İzleme Listeme Ekle'}
            </button>




        </div>
    );
}

export default MovieCard;
