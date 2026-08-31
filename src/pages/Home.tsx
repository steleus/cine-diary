import MovieGrid from "../components/MovieGrid";
import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/Movie";
import Spinner from "../components/Spinner";

interface TmdbMovie {
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

interface TmdbResponse {
  results: TmdbMovie[];
}



function Home() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

  const { data, loading, error, retry } = useFetch<TmdbResponse>(url);

  const movies: Movie[] =
    data?.results.map((movie) => ({
      id: movie.id,
      title: movie.title ?? movie.name ?? "İsimsiz",
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,
      year: Number(
        (movie.release_date ?? movie.first_air_date ?? "").slice(0, 4)
      ),
      type: movie.media_type === "movie" ? "movie" : "series",
      rating: movie.vote_average,
      description: movie.overview,
    })) ?? [];
  





  return (
    <>
    
        <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8">

      <h1 className="text-4xl font-bold text-center mb-4 text-black dark:text-white">CineDiary</h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">İzlediğin film ve dizileri keşfet, kaydet ve takip et.</p>
      {loading && <Spinner />}

      {error && (
        <div>
          <p>{error}</p>
          <button onClick={retry}>Tekrar Dene</button>
        </div>
      )}

      {!loading && !error && <MovieGrid movies={movies} />}


      
    </main>
    </>
  );

}
export default Home;