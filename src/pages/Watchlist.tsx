import MovieGrid from "../components/MovieGrid";
import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
  const { watchlist } = useWatchlist();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        İzleme Listem
      </h1>

      {watchlist.length === 0 ? (
        <p className="text-center text-gray-600">
          İzleme listeniz boş.
        </p>
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </main>
  );
}

export default Watchlist;