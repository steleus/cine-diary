import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        CineDiary
      </h1>

      <div className="flex gap-6">
        <Link to="/"
          className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
          Anasayfa
        </Link>

        <Link to="/search"
          className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
          Ara
        </Link>

        <Link to="/watchlist"
          className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
          İzleme Listem
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded">
        {theme === "light" ? "🌙 Koyu" : "☀️ Açık"}
      </button>
    </nav>
  );
}

export default Navbar;