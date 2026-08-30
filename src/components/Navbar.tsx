import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <h1>My Watchlist</h1>

            <div>

                <Link to="/">Anasayfa</Link>
                <Link to="/search">Ara</Link>
                <Link to="/watchlist">İzleme Listem</Link>

            </div>
        </nav>
    );
}
export default Navbar;


