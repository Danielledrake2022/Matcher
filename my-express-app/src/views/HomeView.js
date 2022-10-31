import React, {useState} from 'react';
import "./HomeView.css"
// import TinderCard from 'react-tinder-card'
// import Deck from './Deck';
import { FcLike } from 'react-icons/fc';
import {AiFillDislike} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import 'animate.css';

let index = 0;

let urlImage ="https://image.tmdb.org/t/p/original/"

function HomeView (props) {

    const[liked, setLiked] = useState([])
    const[seen, setSeen] = useState([])
    const[disliked, setDisliked] = useState([])
    const[current, setCurrent]= useState(props.allMovies[index])

 function IfLiked(id){   
    let liked = props.allMovies.filter(m => m.id === id ) 
    setLiked(liked)
    setCurrent(props.allMovies[index++])
     props.addMovieActionLikedCb(liked)
 }  
function IfSeen(id){
    let seen = props.allMovies.filter(m => m.id === id ) 
    setSeen(seen)
    setCurrent(props.allMovies[index++])
    props.addMovieActionSeenCb(seen)

}
function IfDisliked(id){
    let disliked = props.allMovies.filter(m => m.id === id ) 
    setDisliked(disliked)
    setCurrent(props.allMovies[index++])
    props.addMovieActionDislikedCb(disliked)
}

    return (
        <div className="HomeView">
            <h1>Match'n Watch</h1>

            <div className="Posters" >
       
            
            <div key={current.id} > 
            
                <img src={`${urlImage}${current.poster_path}`} alt=""/>
            </div>
            
           
           
            </div>

         <div className="Buttons">
            <button className="button1" onClick={(e) => IfDisliked(current.id)}><p><AiFillDislike/></p></button>
            <button className="button2" onClick={(e) => IfSeen(current.id)}><p><AiFillEye/></p></button>
            <button className="button3" onClick={(e) => IfLiked(current.id)}><p><FcLike /></p></button>
         </div>

        </div>
    );
}

export default HomeView;