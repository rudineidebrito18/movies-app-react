export default interface Movie {
    id?: number,
    title: string,
    poster_path?: string,
    vote_average: number,
    release_date: string,
    overview?: string,
    runtime: number,
    genres: [{id: number, name: string}],
    vote_count: number
}