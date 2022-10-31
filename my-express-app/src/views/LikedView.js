import React from "react";
import "./LikedView.css";

let urlImage = "https://image.tmdb.org/t/p/original/";

function LikedView(props) {
  function handleClick(id) {
    props.showMovies(id);
    console.log("Click", id);
  }

  return (
    <div className="LikedView">
      <h2>Liked</h2>
      {Object.keys(props.selectMovie).length ? (
        <div className="Featured-Movie">
          <div>
            <img src={`${urlImage}${props.selectMovie.poster_path}`} alt="" />
          </div>
          <div>
            <h5>{props.selectMovie.original_title}</h5>
            <h6>{props.selectMovie.overview}</h6>
          </div>
        </div>
      ) : null}

      <div className="ImageGrid">
        {props.movieActionLiked.length
          ? props.movieActionLiked.map((movie) => (
              <div key={movie.id}>
                <div className="show" onClick={(e) => handleClick(movie.id)}>
                  <img src={`${urlImage}${movie.poster_path}`} alt="" />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default LikedView;
