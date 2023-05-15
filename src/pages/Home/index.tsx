import { useEffect, useState } from "react";
import api from "../../services/api";
import MovieCard from "../../components/MovieCard";
import Movie from "../../models/movie";

import Navbar from "../../components/Navbar";
import Area from "../../components/Area";

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
        <>
            <Navbar />
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
    );
}

export default Home;