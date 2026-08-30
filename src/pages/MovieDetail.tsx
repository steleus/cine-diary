import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useWatchlist } from "../context/WatchlistContext";


interface MovieDetailData{
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    overview: string;
    media_type: "movie" | "tv";

}

function MovieDetail() {
    const { id } = useParams();
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data, loading, error, retry } = useFetch<MovieDetailData>(url);

     return (
    <main>
      {loading && <p>Yükleniyor...</p>}

      {error && (
        <div>
          <p>{error}</p>
          <button onClick={retry}>Tekrar Dene</button>
        </div>
      )}

      {data && (
        <section>
          <h1 className="text-3xl font-bold mb-4">
            {data.title ?? data.name}</h1>

          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title ?? data.name}
            />
          )}

          <p>Puan: {data.vote_average}</p>

          <p>{data.overview}</p>

          <button
  className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
  onClick={() => {
    if (isInWatchlist(data.id)) {
      removeFromWatchlist(data.id);
    } else {
      addToWatchlist({
        id: data.id,
        title: data.title ?? data.name ?? "İsimsiz",
        poster: data.poster_path
          ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
          : null,
        year: Number(
          (data.release_date ?? data.first_air_date ?? "").slice(0, 4)
        ),
        type: "movie",
        rating: data.vote_average,
        description: data.overview,
      });
    }
  }}
>
  {isInWatchlist(data.id)
    ? "Listeden Çıkar"
    : "İzleme Listesine Ekle"}
</button>
        </section>
      )}
    </main>
  );
}

export default MovieDetail;

