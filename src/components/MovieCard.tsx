import type { Movie } from '../types/Movie';
import {useWatchlist} from "../context/WatchlistContext";
import { Link } from "react-router-dom";



interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    const inWatchlist = isInWatchlist(movie.id);




    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
  {movie.poster && (
  <img
    src={movie.poster}
    alt={movie.title}
    className="w-full h-80 object-cover"
  />
)}

  <div className="p-4">
    <Link to={`/movie/${movie.id}`}>
  <h2 className="text-xl font-bold mb-2">
    {movie.title}
  </h2>
</Link>

    <p className="text-gray-600">{movie.year}</p>

    <p className="text-gray-600">
      {movie.type === "movie" ? "Film" : "Dizi"}
    </p>

    <p className="mt-2">⭐ {movie.rating}</p>

    <p className="text-gray-600 mt-2 line-clamp-3">
      {movie.description}
    </p>

    <button
      className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800"
      onClick={() =>
        inWatchlist
          ? removeFromWatchlist(movie.id)
          : addToWatchlist(movie)
      }
    >
      {inWatchlist ? "Listeden Çıkar" : "İzleme Listesine Ekle"}
    </button>
  </div>
</div>
);
}

export default MovieCard;
