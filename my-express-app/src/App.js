import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import LikedView from "./views/LikedView";
import HomeView from "./views/HomeView";
import SeenView from "./views/SeenView";
import DislikedView from "./views/DislikedView";
import UserView from "./views/UserView";
import Error404View from "./views/Error404View";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieActionLiked, setMovieActionLiked] = useState([]);
  const [movieActionSeen, setMovieActionSeen] = useState([]);
  const [movieActionDisliked, setMovieActionDisliked] = useState([]);
  const [movieGrid, setMovieGrid] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // the current page you are on has the initial value of page(1) to be incremented later


 // get current page from the API and get the next page to be fetched from the API when movies are liked, seen or disliked or finnished on the current page
  const getMovies = async () => {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=92b023c677ec515ad3da46754457863d&language=en-US&page=${currentPage}`
      );
      if (response.ok) {
        let data = await response.json();
        setAllMovies(data.results);
        console.log(data.results);
        console.log(currentPage);
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  };


  useEffect(() => {
    getMovies();
  }, []);


  function addMovieActionLiked(liked) {
    setMovieActionLiked(liked);
  }
  function addMovieActionSeen(seen) {
    setMovieActionSeen(seen);
    console.log(seen);
  }
  function addMovieActionDisliked(disliked) {
    setMovieActionDisliked(disliked);
  }

  function showMovies(id) {
    let result = allMovies.filter((movies) => movies.id === id);
    setMovieGrid(result[0]);
  }



  return (
    <div className="App">
      <Navbar />

      <Routes>
        {allMovies.length > 0 && (
          <Route
            path="/"
            element={
              <HomeView
                allMovies={allMovies}
                addMovieActionLikedCb={addMovieActionLiked}
                addMovieActionSeenCb={addMovieActionSeen}
                addMovieActionDislikedCb={addMovieActionDisliked}
                // the currentpage should be passed from homeview here:
                getMoviesCb={getMovies}
                currentPage={currentPage}
                setCurrentPageCb={setCurrentPage}
              />
            }
          />
        )}

        <Route
          path="liked"
          element={
            <LikedView
              movieActionLiked={movieActionLiked}
              showMovies={(id) => showMovies(id)}
              selectMovie={movieGrid}
            />
          }
        />
        <Route
          path="seen"
          element={
            <SeenView
              movieActionSeen={movieActionSeen}
              showMovies={(id) => showMovies(id)}
              selectMovie={movieGrid}
            />
          }
        />
        <Route
          path="disliked"
          element={
            <DislikedView
              movieActionDisliked={movieActionDisliked}
              showMovies={(id) => showMovies(id)}
              selectMovie={movieGrid}
            />
          }
        />

        <Route path="user" element={<UserView />} />
        <Route path="*" element={<Error404View />} />
      </Routes>
    </div>
  );
}

export default App;
