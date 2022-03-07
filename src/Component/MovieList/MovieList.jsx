import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


function MovieList({MovieData , titleSearch , ratingSearch}) {
    
    return (
        
   <div className='listofmovie'>         

    { MovieData
            .filter(movie => movie.title.toLowerCase().includes(titleSearch) && movie.rating>=ratingSearch)
            .map((movie, index) => <MovieCard movie={movie} key={index }/>)
            } 
   


        </div>)


}
export default MovieList
