import { useParams ,useHistory} from "react-router-dom";
import React, { useState,useEffect } from "react";
import { Button,Card } from "react-bootstrap";

const MovieDetails = ({MovieData}) => {
    const [movie,setMovie] = useState({})
    let {id} = useParams()
    useEffect(() => {
        setMovie(MovieData.find(movie=>movie.id === id))
    },[id])
     
    let history = useHistory()

    return (
      <center> <Card style={{ width: '18rem' , marginTop :'30px' }}>
        <iframe width="290"
     height="315" 
     src= {movie.trailer}
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Button variant='primary' onClick={()=>history.push("/")}>Go Back</Button>
        </Card.Body>
      </Card>
      </center> 

    
    );
}

export default MovieDetails;
