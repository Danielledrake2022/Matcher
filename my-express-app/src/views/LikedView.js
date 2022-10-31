import React from 'react';
import "./LikedView.css"

let urlImage ="https://image.tmdb.org/t/p/original/"

function LikedView(props) {
// console.log(props.movieActionLiked)
 function handleClick(){

 }
  



    return (
        <div className="LikedView">
            <h2>Liked</h2>

            <div className="ImageGrid">
                {
            props.movieActionLiked.map((movie) => (
                <div key={movie.id} cnClick={handleClick}> 
                <img src={`${urlImage}${movie.poster_path}`} alt=""/>
                </div>
            ))
        }

            </div>
        </div>
    );
}

export default LikedView;