import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

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
          <h1>{data.title ?? data.name}</h1>

          {data.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title ?? data.name}
            />
          )}

          <p>Puan: {data.vote_average}</p>

          <p>{data.overview}</p>
        </section>
      )}
    </main>
  );
}

export default MovieDetail;

