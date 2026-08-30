import MovieGrid from "../components/MovieGrid";

function Home() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      year: 2014,
      type: "movie" as const,
      rating: 8.7,
      description: "Uzay ve zaman yolculuğunu konu alan bilim kurgu filmi.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      year: 2008,
      type: "movie" as const,
      rating: 9.0,
      description: "Batman'in Gotham şehrindeki mücadelesini anlatan film.",
    },
  ];

  return (
    <main>
      <h1>CineDiary</h1>

      <p>İzlediğin film ve dizileri keşfet, kaydet ve takip et.</p>

      <MovieGrid movies={movies} />
    </main>
  );
}

export default Home;