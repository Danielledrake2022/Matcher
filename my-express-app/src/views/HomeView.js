import React, { useState } from "react";
import "./HomeView.css";
import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import "animate.css";

let urlImage = "https://image.tmdb.org/t/p/original/";

function HomeView(props) {
  const [liked, setLiked] = useState([]);
  const [seen, setSeen] = useState([]);
  const [disliked, setDisliked] = useState([]);
  const [current, setCurrent] = useState(props.allMovies[0]);
  const [index, setIndex] = useState(1);

  function IfLiked(id) {
    let currentLiked = props.allMovies.filter((movie) => movie.id === id);
    setLiked((liked) => [...liked, currentLiked[0]]);
    let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[myIndex]);
    props.addMovieActionLikedCb([...liked, currentLiked[0]]);
  }

  function IfSeen(id) {
    let currentSeen = props.allMovies.filter((movie) => movie.id === id);
    setSeen((seen) => [...seen, currentSeen[0]]);
    let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[myIndex]);
    props.addMovieActionSeenCb([...seen, currentSeen[0]]);
  }

  function IfDisliked(id) {
    let currentDisliked = props.allMovies.filter((movie) => movie.id === id);
    setDisliked((disliked) => [...disliked, currentDisliked[0]]);
    let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[myIndex]);
    props.addMovieActionDislikedCb([...disliked, currentDisliked[0]]);
  }

  return (
    <div className="HomeView">
      <h1>Match'n Watch</h1>
      <div className="Posters">
        <div key={current.id}>
          <img
            src={`${urlImage}${current.poster_path}`}
            alt={current.original_title}
          />
        </div>
      </div>

      <div className="Buttons">
        <button className="button1" onClick={(e) => IfDisliked(current.id)}>
          <p>
            <AiFillDislike />
          </p>
        </button>
        <button className="button2" onClick={(e) => IfSeen(current.id)}>
          <p>
            <AiFillEye />
          </p>
        </button>
        <button className="button3" onClick={(e) => IfLiked(current.id)}>
          <p>
            <FcLike />
          </p>
        </button>
      </div>
    </div>
  );
}

export default HomeView;
