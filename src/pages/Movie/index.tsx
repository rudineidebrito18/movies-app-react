import Area from '../../components/Area'
import Navbar from '../../components/Navbar'
import MovieModel from '../../models/movie'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

import './style.css'

import { FaCalendarAlt, FaStar } from 'react-icons/fa'
import noImage from '../../assets/images/no-image.png'
const imgUrl = import.meta.env.VITE_IMG

function Movie() {
	const [movie, setMovie] = useState<MovieModel>()

	const { id } = useParams()

	const getMovie = async (id: string) => {
		const res = await api(id).get('')
		const data = await res.data
		setMovie(data)
	}

	useEffect(() => {
		id && getMovie(id.toString())
	}, [])

	return (
		<>
			<Navbar />
			<Area>
				<div className='movieContainer'>
					<img
						src={movie?.poster_path ? imgUrl + movie.poster_path : noImage}
						alt={`${movie?.poster_path} poster`}
						className='poster'
					/>
					<div className='infosContainer'>
						<h1 className='title'>{movie?.title}</h1>
						<div className='subInfos'>
							<p className='overview'>
								<h2>Overview:</h2>
								{movie?.overview}
							</p>
							<div className='genres'>
								<h2>Genres: </h2>
								{movie?.genres.length ? movie.genres.map((e) => <p key={e.id}>{e.name}</p>) : ''}
							</div>
							<p className='runtime'>
								<span>
									Runtime: 
								</span>
								{` ${movie?.runtime}min`}
							</p>
							<p><FaStar className="stars" /> {`${movie?.vote_average.toFixed(1)}/10`}</p>
							<p><FaCalendarAlt /> {movie?.release_date}</p>
						</div>
					</div>
				</div>
			</Area>
		</>
	)
}

export default Movie