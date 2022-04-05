import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Card} from "react-bootstrap";

const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        axios.get(process.env.REACT_APP_URL + '/v1/movies/' + id).then(res => {
            setMovie(res.data.movie)
            console.log(res.data.movie)
        })
    }, [])
    return (<div>
            <Card>
                <Card.Img variant="top" src={"https://source.unsplash.com/random/1000x200?sig=" + id}/>
                <Card.Title className={'mt-3'}>
                    {movie.title} - {movie.year}
                </Card.Title>
                <Card.Body>
                    <Card.Text className={'text-left'}>Rating: {movie.rating}</Card.Text>
                    <Card.Text>Duration: {movie.runtime} Minutes</Card.Text>
                    <Card.Text>Description: {movie.description}</Card.Text>
                    <Card.Text>MPAA Rating: {movie.mpaa_rating}</Card.Text>
                </Card.Body>
                <Link to="/">
                    <Card.Footer>
                        Back to Home Page
                    </Card.Footer>
                </Link>
            </Card>
        </div>);
};

export default Movie;
