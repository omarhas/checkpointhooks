import React from 'react'
import MoviesCard from './MoviesCard'
import './Style.css'




const MoviesList = ({movies ,name ,ratingSearch}) => {
    return (
        <div className="cards">
            {movies.filter(el => el.name.toLowerCase().includes(name.toLowerCase().trim())&& el.rate >= ratingSearch).map(film =><MoviesCard film={film} />)}
            
         
     </div>
        
    )
}

export default MoviesList
