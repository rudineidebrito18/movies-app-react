const imgUrl = import.meta.env.VITE_IMG;

export interface MovieCardProps {
    id?: number,
    key?: number,
    title: string,
    poster_path: string,
    vote_average: string,
    release_date: string
}

function MovieCard({ title, poster_path, vote_average, release_date }: MovieCardProps) {
    

    return (
        <div className="movieCardContainer">
            <div>
                <img src={imgUrl + poster_path} alt={`${title} poster`} />
                <h2 className="movieTitle">{title}</h2>
            </div>
            <div className="infosContainer">
                <h3>Note: {vote_average}</h3>
                <p>Date: {release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;