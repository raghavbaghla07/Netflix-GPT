import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    if (!movies) return;
    return (
        <div className=" bg-transparent px-6">
            <h1 className="text-4xl font-medium py-2 text-white">{title}</h1>
            <div className="flex">
                <div className="flex overflow-x-scroll space-x-4 hide-scrollbar">
                    {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>

    )
}

export default MovieList