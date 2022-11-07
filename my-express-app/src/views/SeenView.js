import React from "react";
import "./SeenView.css";

let urlImage = "https://image.tmdb.org/t/p/original/";

function SeenView(props) {
  function handleClick(id) { // this function is called when the user clicks on a movie poster
    props.showMovies(id); // this function is called from the parent, and it will set the state of the selected movie
    console.log("Click", id); // this is just to check that the function is called
  }



  return ( 
    <div className="SeenView"> 
      <h2>Seen</h2>
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

        {props.movieActionSeen.length
          ? props.movieActionSeen.map((movie) => (
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

export default SeenView;
