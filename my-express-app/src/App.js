import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import LikedView from './views/LikedView';
import HomeView from './views/HomeView';
import SeenView from './views/SeenView';
import DislikedView from './views/DislikedView';
import UserView from './views/UserView'
import Error404View from './views/Error404View';

 const MovieApiUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=92b023c677ec515ad3da46754457863d&language=en-US&page=2';


function App() {
  const [allMovies, setAllMovies] = useState([])
  const MovieApiUrl= 'https://api.themoviedb.org/3/movie/popular?api_key=92b023c677ec515ad3da46754457863d&language=en-US&page=2';

 const getMovies = async () =>{

    try {
      let response = await fetch(MovieApiUrl);
      if (response.ok) {
        let data = await response.json();
        setAllMovies(data.results);
        
      } else {
        console.log(`Server error: ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.log("ERROR:", error.message);
    }
}
useEffect(()=>{ 
  getMovies();
}, [])

  return (
    <div className="App">
    

 <Navbar />

<Routes>
  {allMovies.length>0 &&( <Route path="/" element={<HomeView allMovies={allMovies}/>} />)}
    {/* <Route path="/" element={<HomeView allMovies={allMovies}/>} /> */}

    <Route path="liked" element={<LikedView />} />
    <Route path="seen" element={<SeenView />} />
    <Route path="disliked" element={<DislikedView/>} />
    <Route path="user" element={<UserView/>} />
    <Route path="*" element={<Error404View />} />
</Routes> 

      
    </div>
  );
}

export default App;
