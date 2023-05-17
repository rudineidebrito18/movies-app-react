import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Area from '../../components/Area'
import MovieCard from '../../components/MovieCard'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import Movie from '../../models/movieMin'
import { apiUseSearch } from '../../services/api'

function Search() {
	const [movies, setMovies] = useState([])

	const [searchParams] = useSearchParams()
	const query = searchParams.get('q')

	const getSearchMovies = async (e: string) => {
		const res = await apiUseSearch(e).get('')
		const data = await res.data.results

		setMovies(data)
	}

	useEffect(() => {
		query && getSearchMovies(query)
	}, [query])

	return (
		<>
			<Navbar />
			<Title>
                Results for: {query}
			</Title>
			<Area>
				<div className="mainContainer">
					{movies.length === 0 ?
						<Title>
                            Carrengando...
						</Title> :
						movies.map((movie: Movie) => {
							return (
								<MovieCard movie={movie} key={movie.id} />
							)
						})}
				</div>
			</Area>
		</>
	)
}

export default Search