import { useEffect, useState } from "react";
import api from "../../services/api";
import MovieCard from "../../components/MovieCard";
import Movie from "../../models/movie";

import "./style.css"

function Home() {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRetedMovies = async (sub: string) => {
        const res = await api(sub).get("");
        const data = await res.data.results;

        setTopMovies(data);
    }

    useEffect(() => {
        getTopRetedMovies('top_rated');
    }, []);

    return (
        <div className="homeContainer">
            {topMovies && topMovies.map((movie: Movie) => {
                return (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            })}
        </div>
    );
}

export default Home;