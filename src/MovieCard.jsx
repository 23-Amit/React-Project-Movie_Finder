import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster} alt="img" />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

// const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// }

 export default MovieCard