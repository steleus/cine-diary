

import { useState } from "react";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import type { Movie } from "../types/Movie";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


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




function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const url = `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(searchTerm)}`;


  const { data, loading, error, retry } = useFetch<TmdbResponse>(url);

  const movies: Movie[] =
    data?.results
      .filter((movie) => movie.media_type === "movie" || movie.media_type === "tv")
      .map((movie) => ({
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
    <main className="min-h-screen bg-white dark:bg-gray-900 px-4 py-8">
  <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
    Film & Dizi Ara
  </h1>
  <div className="max-w-xl mx-auto mb-8 ">

      <SearchBar
  searchTerm={searchInput}
  onChange={setSearchInput}
  onSubmit={() => {
    if (searchInput.trim() === "") {
      alert("Lütfen film veya dizi adı girin.");
      return;
    }

    setSearchTerm(searchInput);
  }}
/>
</div>
      {loading && <Spinner />}

        {error && (
           <ErrorMessage
            message={error}
            onRetry={retry}/>
        )}

        {!loading && !error && searchTerm && (
          <MovieGrid movies={movies} />
        )}
    </main>
  );
}

export default Search;