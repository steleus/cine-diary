import {useParams} from "react-router-dom";

function MovieDetail() {
    const { id } = useParams();

    return (
        <main>
            <h1>Film Detayı</h1>    
            <p>Film ID: {id}</p>
        </main>
    );
}

export default MovieDetail;

