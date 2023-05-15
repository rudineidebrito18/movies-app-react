import { FaCalendarAlt, FaStar } from "react-icons/fa";
import Area from "../../components/Area";
import Navbar from "../../components/Navbar";
import MovieModel from "../../models/movie";

import noImage from "../../assets/images/no-image.png"
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
const imgUrl = import.meta.env.VITE_IMG;


function Movie() {
    const [movie, setMovie] = useState<MovieModel>()

    const {id} = useParams()

    const getMovie = async (id: string) => {
        const res = await api(id).get("");
        const data = await res.data;
        setMovie(data);
    }
    
    useEffect(() => {
        id && getMovie(id.toString())
    },[])
    
    console.log(movie)
    return (
        <>
            <Navbar />
            <Area>
                <h1>{movie?.title}</h1>
            </Area>
        </>
    );
}

export default Movie;