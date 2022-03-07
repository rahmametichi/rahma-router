import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MovieCard({movie}) {
    return (
        <div>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description}
    </Card.Text>
    <h3> {'⭐'.repeat(movie.rating)} </h3>
   <Link to={`/details/${movie.id}`}><Button variant="primary">Watch Trailer</Button></Link> 
  </Card.Body>
</Card>
        </div>
    )
}
export default MovieCard
