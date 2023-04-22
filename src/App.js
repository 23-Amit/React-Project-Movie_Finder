import React from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

//ecb97987
const API_URL = 'http://www.omdbapi.com?apikey=ecb97987';
const App =()=>
{
    
    const [movies,setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    
    useEffect(()=>
    {
        searchMovie('hulk')
    },[])

    const searchMovie = async(title)=>
    {
       const response = await fetch(`${API_URL}&s=${title}`)
       const data = await response.json();
       setMovies(data.Search)
    }
    // const movie = {
    // "Title": "The Incredible Hulk",
    // "Year": "2008",
    // "imdbID": "tt0800080",
    // "Type": "movie",
    // "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"

    

    return (
        <div className="app">
            <h1>Movie Finder App</h1>
            <div className="search">
                <input 
                placeholder="Search for movie"
                value = {searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                 />
                 <img 
                 src={SearchIcon} 
                 alt="search" 
                 onClick={()=>searchMovie(searchTerm)} />

            </div>
                 {
                    movies?.length>0
                    ?
                    (<div className="container">
                        {
                            movies.map((movie)=>
                            (
                                <MovieCard movie={movie}/>
                            ))
                        }
                    
                 </div>):
                 (
                    <div className="empty">
                        <h2>No movie found</h2>
                    </div>
                 )

                 }
        </div>
    )
}
export default App; 

// import React, { useState, useEffect } from "react";

// import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
// import "./App.css";
// //b6003d8a
// const API_URL = "http://www.omdbapi.com?apikey=ecb97987";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovies("");
//   }, []);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

//export default App;