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


// each one of the functions need to check at every click if its the last movie of the page. if it is then call the callback from the parent using props.   

 async function IfLiked(id) {
    let currentLiked = props.allMovies.filter((movie) => movie.id === id);
    setLiked((liked) => [...liked, currentLiked[0]]);
    // let myIndex = index + 1; // what is this for? 
    setCurrent(props.allMovies[index + 1]);
    setIndex((index) => index + 1); 
    props.addMovieActionLikedCb([...liked, currentLiked[0]]);
    // console.log(index);
  // ifliked and there are no more movies on the current page, fetch the next page from the API   
    if (index === props.allMovies.length -1) {
     await props.getMoviesCb(props.currentPage + 1); // bc we cannot assume if this will be called later than 
     props.setCurrentPageCb(props.currentPage + 1);
    //  console.log("current page",props.currentPage);
     setCurrent(props.allMovies[0]);
     setIndex(0);
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
    // if the user has seen the last movie on the current page, fetch the next page from the API
    if (index === props.allMovies.length -1) {
      props.setCurrentPageCb(props.currentPage + 1);
      console.log("current page",props.currentPage);
      props.getMoviesCb();
      setCurrent(props.allMovies[0]);
      setIndex(0);

    }
  }

  function IfDisliked(id) {
    let currentDisliked = props.allMovies.filter((movie) => movie.id === id);
    setDisliked((disliked) => [...disliked, currentDisliked[0]]);
    // let myIndex = index + 1;
    setIndex((index) => index + 1);
    setCurrent(props.allMovies[index]);
    props.addMovieActionDislikedCb([...disliked, currentDisliked[0]]);
    // if Disliked and there are no more movies on the current page, fetch the next page from the API   
      if (index === props.allMovies.length -1) {
       props.setCurrentPageCb(props.currentPage + 1);
       console.log("current page",props.currentPage);
       props.getMoviesCb();
       setCurrent(props.allMovies[0]);
       setIndex(0);
      }
  }

// if there are no more movies on the last page. 
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
