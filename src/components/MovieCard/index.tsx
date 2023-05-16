import { FaCalendarAlt, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import Movie from '../../models/movie'

import './style.css'

import noImage from '../../assets/images/no-image.png'

const imgUrl = import.meta.env.VITE_IMG

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
				<img src={movie.poster_path ? imgUrl + movie.poster_path : noImage} alt={`${movie.title} poster`} />
				<h2 className="movieTitle">{movie.title}</h2>
			</div>
			<div className="infosContainer">
				<p><FaStar className="stars"/> {movie.vote_average.toFixed(1)}</p>
				<p><FaCalendarAlt /> {movie.release_date}</p>
			</div>
		</div>
	)
}

export default MovieCard