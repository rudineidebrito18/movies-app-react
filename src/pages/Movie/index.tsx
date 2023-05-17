import Area from '../../components/Area'
import Navbar from '../../components/Navbar'
import MovieModel from '../../models/movie'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

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
				<img 
					src={movie?.poster_path ? imgUrl + movie.poster_path : noImage} 
					alt={`${movie?.poster_path} poster`} 
				/>
				<h1>{movie?.title}</h1>
				<p>{movie?.overview}</p>
				<p>{movie?.runtime}</p>
				<p>{movie?.release_date}</p>
				<p>{movie?.vote_average}</p>
				<p>{movie?.vote_count}</p>
				{movie?.genres.length ? movie.genres.map((e) => <p key={e.id}>{e.name}</p>) : ''}
			</Area>
		</>
	)
}

export default Movie