
import './App.css';
import './Component/MoviesData'
import {useState} from 'react'
import { MoviesData } from './Component/MoviesData';
import AddMovie from './Component/AddMovies'
import MoviesList from './Component/MoviesList';
import Navbarr from './Component/Navbarr';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Description from './Description';


function App() {
  const [movies ,setMovies]=useState(MoviesData)
  const [name ,setName]=useState("")
  const [ratingSearch , setRatingSearch]=useState(0)
  let AddFilm =(newmovie , e)=>{
    e.preventDefault()
    setMovies([...movies,newmovie])
  }

  return (
   
    <div className="App">
          <Router>
          <Switch>
          <Route  path="/about">
          <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/><br/>

           <Description/>
          </Route>
          <Route path="/users">
           
          </Route>
          <Route exact path="/">
          <Navbarr name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/><br/>
<AddMovie AddFilm={AddFilm}/>
    <MoviesList movies={movies} name={name} ratingSearch={ratingSearch}/>
    

          </Route>
        </Switch>

</Router>
      {/* <header className="App-header">></header> */}

    
  
    </div>
  );
}

export default App;
