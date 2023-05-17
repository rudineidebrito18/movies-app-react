import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import Movie from '../../models/movieMin'
import api from '../../services/api'

import Area from '../../components/Area'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'

function Home() {
	const [topMovies, setTopMovies] = useState([])

	const getTopRetedMovies = async (sub: string) => {
		const res = await api(sub).get('')
		const data = await res.data.results
		setTopMovies(data)
	}

	useEffect(() => {
		getTopRetedMovies('top_rated')
	}, [])

	return (
		<>
			<Navbar />
			<Title>Top Rated</Title>
			<Area>
				<div className="mainContainer">
					{topMovies && topMovies.map((movie: Movie) => {
						return (
							<MovieCard movie={movie} key={movie.id} />
						)
					})}
				</div>
			</Area>
		</>
	)
}

export default Home