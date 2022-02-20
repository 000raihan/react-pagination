import React, {useState } from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const Movie = ({ title, poster_path, overview, vote_average }) => {
    
    const [showOverview, setShowOverview] = useState(false)

    const displayOverview = () => {
        setShowOverview(!showOverview)
    }

   return  (
        <div className="movie" onClick={displayOverview}>
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                
            </div>
           <div className={`${ showOverview ? "movie-over":"movie-click"}` }>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <h3>Vote Average : {vote_average}</h3>
                
            </div>
        </div>
    )
}
export default Movie;
    
