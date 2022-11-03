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
  // const MovieApiUrl0= 'https://api.themoviedb.org/3/movie/popular?api_key=92b023c677ec515ad3da46754457863d&language=en-US&page=4';
  const MovieApiUrl1 =
    "https://api.themoviedb.org/3/movie/popular?api_key=92b023c677ec515ad3da46754457863d&language=en-US&page=3";
  const [allMovies, setAllMovies] = useState([]);
  const [movieActionLiked, setMovieActionLiked] = useState([]);
  const [movieActionSeen, setMovieActionSeen] = useState([]);
  const [movieActionDisliked, setMovieActionDisliked] = useState([]);
  const [movieGrid, setMovieGrid] = useState([]);

  const getMovies = async () => {
    try {
      let response = await fetch(MovieApiUrl1);
      if (response.ok) {
        let data = await response.json();
        setAllMovies(data.results);
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
