export interface Movie {
  id: number;
  title: string;
  poster: string | null;
  year: number;
  type: "movie" | "series";
  rating: number;
  description: string;
}