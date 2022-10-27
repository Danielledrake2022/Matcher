import React from "react";

function ImagesMovies(props){
let movie = props.movie
    return(
        <div>
            {/* <img scr={movie.poster_path} alt="image"/> */}
            <img scr={movie.poster_path} alt={movie.poster_path}/>

        </div>
    )
}

export default ImagesMovies;