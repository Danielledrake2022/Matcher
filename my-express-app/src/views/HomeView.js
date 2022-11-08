import React, {useEffect, useState } from "react";
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
  


  // reset the current movie and index whenever props.allMovies changes (i.e. a new page is fetched)
  useEffect (() => {  
  setCurrent(props.allMovies[0]); 
  setIndex(0);
  }, [props.allMovies]);


  async function IfLiked() {
    // Add current movie to liked
    props.addMovieActionLikedCb([...liked, current]);
    setLiked((liked) => [...liked, current]);
    // Are we at last movie on page?
    if (index === props.allMovies.length - 1) {
      // Yes, we're at last movie; get another page
      await props.getMoviesCb(props.currentPage + 1);
      // (current and index are reset by useEffect())
    } else {
      // No, there's another movie on the page
      setCurrent(props.allMovies[index+1]);
      setIndex(index => index + 1);
    }
  }

  async function IfSeen() {
    // Add current movie to seen
    props.addMovieActionSeenCb([...seen, current]);
    setSeen((seen) => [...seen, current]);
    // Are we at last movie on page?
    if (index === props.allMovies.length - 1) {
      // Yes, we're at last movie; get another page
      await props.getMoviesCb(props.currentPage + 1);
      // (current and index are reset by useEffect())
    } else {
      // No, there's another movie on the page
      setCurrent(props.allMovies[index+1]);
      setIndex(index => index + 1);
    }
  }

  async function IfDisliked() {
    // Add current movie to disliked
    props.addMovieActionDislikedCb([...disliked, current]);
    setDisliked((disliked) => [...disliked, current]);
    // Are we at last movie on page?
    if (index === props.allMovies.length - 1) {
      // Yes, we're at last movie; get another page
      await props.getMoviesCb(props.currentPage + 1);
      // (current and index are reset by useEffect())
    } else {
      // No, there's another movie on the page
      setCurrent(props.allMovies[index+1]);
      setIndex(index => index + 1);
    }
  }



 
//  async function IfLiked(id) {
//     let currentLiked = props.allMovies.filter((movie) => movie.id === id);
//     setLiked((liked) => [...liked, currentLiked[0]]);
//     let myIndex = index + 1;   // what is this for?
//     setCurrent(props.allMovies[index + 1]);
//     setIndex((index) => index + 1); 
//     props.addMovieActionLikedCb([...liked, currentLiked[0]]);
//   ifliked and there are no more movies on the current page, fetch the next page from the API  
//     if (index === props.allMovies.length -1) {
//      await props.getMoviesCb(props.currentPage + 1); // bc we cannot assume if this will be called later than 
//      props.setCurrentPageCb(props.currentPage + 1);
//      setCurrent(props.allMovies[0]);
//      setIndex(0);
//     }
//   }




const noMoreMovies = () => {
  if (index === props.allMovies.length -1) {
    return <h1>no more movies</h1>
  }
}
if (!current)  { 
  return <h2>Loading..</h2>
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
