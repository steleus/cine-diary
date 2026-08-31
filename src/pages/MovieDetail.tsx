import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useWatchlist } from "../context/WatchlistContext";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";



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
    const { id, type } = useParams();
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    const endpoint = type === "series" ? "tv" : "movie";

    const url = `https://api.themoviedb.org/3/${endpoint}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    const { data, loading, error, retry } = useFetch<MovieDetailData>(url);

     return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8">
      {loading && <Spinner />}

      {error && (
         <ErrorMessage
          message={error}
          onRetry={retry}/>
      )}

      {data && (
        <section className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
            {data.title ?? data.name}</h1>

          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title ?? data.name}
              className="w-full max-w-sm mx-auto rounded-lg mb-6"
            />
          )}

          <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">
              ⭐ Puan: {data.vote_average}</p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{data.overview}</p>

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
        type: data.media_type === "movie" ? "movie" : "series",
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

