import React from 'react'
import {Button,Nav, Container,InputGroup,Form,FormControl ,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Rating from './Rating'
const Navbarr = ({name,setName,setRatingSearch,ratingSearch}) => {
    return (
        <div>
     {}
{}
<>
  <Navbar className="nav"> 
    {}
    {}
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <Button >Search</Button>
     <Rating rate={ratingSearch} setRate={setRatingSearch}/>
    </Form>
  </Navbar>
  
 
</>





        </div>
    )
}

export default Navbarr
