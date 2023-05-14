import { FaStar } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'

import Movie from "../../models/movie";
const imgUrl = import.meta.env.VITE_IMG;
import "./style.css"
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
    movie: Movie
}

function MovieCard(props: MovieCardProps) {
    const { movie } = props
    const navigate = useNavigate()

    function handleMovie() {
        navigate(`/movie/${movie.id}`)
    }

    return (
        <div onClick={handleMovie} className="movieCardContainer">
            <div className="posterContainer">
                <img src={movie.poster_path ? imgUrl + movie.poster_path : "https://www.totaltoner.com.br/loja/img/system/sem-imagem.gif"} alt={`${movie.title} poster`} />
                <h2 className="movieTitle">{movie.title}</h2>
            </div>
            <div className="infosContainer">
                <p><FaStar /> {movie.vote_average}</p>
                <p><FaCalendarAlt /> {movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;