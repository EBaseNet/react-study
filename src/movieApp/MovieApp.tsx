import { useEffect, useState } from "react"
// import { cn } from "../utils/cn"
// import { cva } from "class-variance-authority"

import type { Movie } from "./context/movie.context";
import MovieItem from "./MovieItem"
import "./Movie.css";

function MovieApp(){  
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async() => {
        try {
            const response = await fetch("https://ghibliapi.vercel.app/films");
            const json : Movie[] = await response.json();

            console.log(json);
            setMovies(json);
        }catch(e){
            console.error("error: "+e)
        }finally{
            setLoading(false);
        }
    }

    return (
    <>
        {loading ? (
            <div className="loading">Loading...</div>
        ) : 
            <div className="app-container">
                <ul className="movie-ul">
                {movies.map((item) => (
                    <MovieItem key={item.id} {...item} />
                ))}
                </ul>
            </div>
        }
    </>
    )
}

export default MovieApp