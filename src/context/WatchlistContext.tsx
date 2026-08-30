import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../types/Movie";
import useLocalStorage from "../hooks/useLocalStorage";

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

interface WatchlistProviderProps {
  children: ReactNode;
}

function WatchlistProvider({ children }: WatchlistProviderProps) {
  const [watchlist, setWatchlist] = useLocalStorage<Movie[]>(
    "watchlist",
    []
  );

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((currentList) => {
      if (currentList.some((item) => item.id === movie.id)) {
        return currentList;
      }

      return [...currentList, movie];
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((currentList) =>
      currentList.filter((movie) => movie.id !== id)
    );
  };

  const isInWatchlist = (id: number) => {
    return watchlist.some((movie) => movie.id === id);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

function useWatchlist() {
  const context = useContext(WatchlistContext);

  if (!context) {
    throw new Error(
      "useWatchlist, WatchlistProvider içinde kullanılmalıdır."
    );
  }

  return context;
}

export { WatchlistProvider, useWatchlist };

