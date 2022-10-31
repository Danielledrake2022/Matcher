import React from 'react';
import "./SeenView.css"

let urlImage ="https://image.tmdb.org/t/p/original/"


function SeenView(props) {

    return (
        <div className="SeenView">
            <h2>Seen</h2>
            {
            // props.movieActionSeen.map((movie) => (
            //     <div key={movie.id} > 
            //     <img src={`${urlImage}${movie.poster_path}`} alt=""/>
            //     </div>
            // ))
        }
        </div>
    );
}

export default SeenView;