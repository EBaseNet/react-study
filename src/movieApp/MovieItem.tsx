import { Link } from "react-router-dom";

import type { Movie } from "./context/movie.context";

function MovieItem(props : Movie) {
  return (
    <li className="movie-card">
      <Link to={"/detail/"+props.id} >
        <img src={props.image} alt={props.title} className="movie-poster" />
        <div className="movie-info">
          <h2 className="movie-title">{props.title}</h2>
          <p className="movie-director">{props.director}</p>
        </div>
        {/* <p>{props.description}</p> */}
        {/* <p>year : {props.release_date}</p> */}
      </Link>
    </li>
  )
}

export default MovieItem;