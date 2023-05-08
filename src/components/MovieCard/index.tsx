import Movie from "../../models/movie";
const imgUrl = import.meta.env.VITE_IMG;
import "./style.css"

interface MovieCardProps {
    movie: Movie
}

function MovieCard(props: MovieCardProps) {
    const { movie } = props

    return (
        <div className="movieCardContainer">
            <div className="posterContainer">
                <img src={imgUrl + movie.poster_path} alt={`${movie.title} poster`} />
                <h2 className="movieTitle">{movie.title}</h2>
            </div>
            <div className="infosContainer">
                <p>Note: {movie.vote_average}</p>
                <p>Date: {movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;