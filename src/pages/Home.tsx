import { useEffect, useState } from "react";
import api from "../services/api";
import MovieCard, { MovieCardProps } from "../components/MovieCard";

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
            {topMovies && topMovies.map((movie: MovieCardProps) => {
                return (
                    <MovieCard
                        title={movie.title}
                        vote_average={movie.vote_average}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        key={movie.id}
                    />
                )
            })}
        </div>
    );
}

export default Home;