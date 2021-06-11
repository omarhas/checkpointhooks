import React from 'react'
import {Card,Form ,Button} from 'react-bootstrap'
import Rating from './Rating'
import './Style.css'
const MoviesCard = ({film}) => {
    return (
    
 <div className="card">
  <img src={film.url} style={{ height: '400px' ,width:'100% ',borderRadius:'50px'}} />
  <div className="container">
  <h4><b>{film.name}</b></h4>
   <Rating rate={film.rate}/>
  <h5 >Summary : </h5> 
   <p> The events of the film revolve around science fiction, suspense and excitement...</p>
   
  
  </div>

</div> 

        
    )
}

export default MoviesCard

