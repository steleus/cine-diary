import MovieGrid from "../components/MovieGrid";
import { useWatchlist } from "../context/WatchlistContext";


function Watchlist() {
    const { watchlist } = useWatchlist();

    return (

        <main>
            <h1>İzleme Listem</h1>
            {watchlist.length === 0 ? (
                <p>İzleme listeniz boş.</p>
            ) : (
                <MovieGrid movies={watchlist} />

            )}
        </main>

    );


}
export default Watchlist;
