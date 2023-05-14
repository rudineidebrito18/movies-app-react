import { useEffect, useState } from "react";
import { apiUseSearch } from "../../services/api";
import MovieCard from "../../components/MovieCard";
import Movie from "../../models/movie";
import Navbar from "../../components/Navbar";
import { useSearchParams } from "react-router-dom";

function Search() {
    const [movies, setMovies] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const getSearchMovies = async (e: string) => {
        const res = await apiUseSearch(e).get("");
        const data = await res.data.results;

        setMovies(data);
    }

    useEffect(() => {
        query && getSearchMovies(query)
    },[query])

    console.log("render!")
    return (
        <>  
            <Navbar showSearch/>
            <div className="mainContainer">
                {movies.length === 0 && <p>Carrengando...</p>}
                {movies.length > 0 && movies.map((movie: Movie) => {
                    return (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                })}
            </div>
        </>
    );
}

export default Search;