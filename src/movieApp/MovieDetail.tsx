import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import type { Movie } from "./context/movie.context";

function MovieDetail(){
    // const params = useParams();
    const { id } = useParams<{ id: string }>();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        if (!id) return;
       getMovies();
    }, []);

    const getMovies = async() => {
        try {
            const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
            const json: Movie = await response.json();

            console.log(json);
            setMovie(json);
        }catch(e){
            console.error("error: "+e)
        }finally{
            setLoading(false);
        }
    }

    if(loading) return <div className="loading">Loading...</div>
    if (!movie) return <div className="loading">작품을 찾을 수 없습니다.</div>;
    return (
    <>
        {/* {loading ? (
            <div className="loading">loading...</div>
        ) : ( */}
        <div className="app-container">
            <Link to="/" className="detail-back">{"<"} 목록 돌아가기</Link>
            <div className="detail-card">
                <img src={movie.image} alt={movie.title} className="detail-poster" />
                <h1 className="detail-title">{movie.title}</h1>
                <div className="detail-info">
                    <p className="detail-description">{movie.description}</p>
                    <p className="detail-director">· Director : {movie.director}</p>
                    <p className="detail-release">· Release : {movie.release_date}</p>
                </div>
            </div>
        </div>
        {/* )} */}
    </>
    )
}
export default MovieDetail;