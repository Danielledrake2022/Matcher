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
  const [index, setIndex] = useState(0);



// each one of these functions need to check if the user has clicked , then call the callback from the parent : props. If i have seen last movie call the callback from parent to see next page   

  function IfLiked(id) {
    let currentLiked = props.allMovies.filter((movie) => movie.id === id);
    setLiked((liked) => [...liked, currentLiked[0]]);
    // let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[index]);
    props.addMovieActionLikedCb([...liked, currentLiked[0]]);
    console.log(index);
  // if liked and there are no more movies on the current page, fetch the next page from the API   
    if (index === props.allMovies.length -1) {
     props.setCurrentPageCb(props.currentPage + 1);
     console.log("current page",props.currentPage);
     props.getMoviesCb();
     setCurrent(props.allMovies[0]);
     setIndex(0);
    console.log("hello");
    }
  }



  function IfSeen(id) {
    let currentSeen = props.allMovies.filter((movie) => movie.id === id);
    setSeen((seen) => [...seen, currentSeen[0]]);
    // let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[index]);
    props.addMovieActionSeenCb([...seen, currentSeen[0]]);
    console.log(index);
    // if seen and there are no more movies on the current page, fetch the next page from the API   
      if (index === props.allMovies.length -1) {
       props.setCurrentPageCb(props.currentPage + 1);
       console.log("current page",props.currentPage);
       props.getMoviesCb();
       setCurrent(props.allMovies[0]);
       setIndex(0);
      console.log("hello");
      }
  }

  function IfDisliked(id) {
    let currentDisliked = props.allMovies.filter((movie) => movie.id === id);
    setDisliked((disliked) => [...disliked, currentDisliked[0]]);
    // let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[index]);
    props.addMovieActionDislikedCb([...disliked, currentDisliked[0]]);
    console.log(index);
    // if Disliked and there are no more movies on the current page, fetch the next page from the API   
      if (index === props.allMovies.length -1) {
       props.setCurrentPageCb(props.currentPage + 1);
       console.log("current page",props.currentPage);
       props.getMoviesCb();
       setCurrent(props.allMovies[0]);
       setIndex(0);
      console.log("hello");
      }
  }

// if there are no more movies on the last page. 
const noMoreMovies = () => {
  if (index === props.allMovies.length -1) {
    return <h1>no more movies</h1>
  }
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
