export interface Movie {
  id: number;
  title: string;
  poster: string;
  year: number;
  type: "movie" | "series";
  rating: number;
  description: string;
}