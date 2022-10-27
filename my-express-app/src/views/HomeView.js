import React, {useState} from 'react';
import "./HomeView.css"
import ImagesMovies from "./ImagesMovies"
// import TinderCard from 'react-tinder-card'




function HomeView (props) {
    const [movieInfo, setMovieInfo] = useState([])
// console.log(props.allMovies)
let urlImage ="https://image.tmdb.org/t/p/original/"


const IfLiked = event => {

}
const IfSeen = event => {
    
}
const IfDisLiked = event => {
    
}
    return (
        <div className="HomeView">
            <div className="Posters">
           {props.allMovies.map((movie)=> (
            <div key={movie.id}>
               
                <img src={`${urlImage}${movie.poster_path}`} alt=""/>

            </div>
           ))
           }
            </div>
         <div className="Buttons">
            <button className="button1" onClick={IfDisLiked}>Disliked</button>
            <button className="button2" onClick={IfSeen}>Seen</button>
            <button className="button3" onClick={IfLiked}>Like</button>

         </div>

        </div>
    );
}

export default HomeView;