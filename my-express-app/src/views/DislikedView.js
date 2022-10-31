import React from 'react';
import "./DislikedView.css"
let urlImage ="https://image.tmdb.org/t/p/original/"

function DislikedView(props) {
    
    return (
        <div className="DislikedView">
            <h2>Disliked</h2>
            {
            props.movieActionDisliked.map((movie) => (
                <div key={movie.id} > 
                <img src={`${urlImage}${movie.poster_path}`} alt=""/>
                </div>
            ))
        }
        </div>
    );
}

export default DislikedView;