import {Button, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([])
    const history = useNavigate()

    const getMovies = () => {
        axios.get(`${process.env.REACT_APP_URL}/v1/movies`).then(res => {
            if (res.data.movies !== null)setMovies(res.data.movies)
        })
    }

    const onSeeDetail = (id) => {
        history(`/movie/${id}`)
    }

    const onUpdateMovie = (id) => {
        alert('update movie' + id)
    }

    const onDeleteMovie = (id) => {
        axios.delete(`${process.env.REACT_APP_URL}/v1/movies/${id}`).then(() => getMovies())
    }

    const handleSearch = e => {
        e.preventDefault()
        console.log('e', e)
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            {/*search bar*/}
            <InputGroup className="mb-3 w-50 m-auto" onSubmit={handleSearch}>
                <FormControl
                    placeholder="Search Movie Name"
                    aria-label="Search Movie Name"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" type={'submit'} onClick={handleSearch}>
                    search
                </Button>
            </InputGroup>

            {/*movie list*/}
            <Row sm={2} md={3} xl={4} className="g-4 justify-content-center">
                {
                    movies.length ? movies.map((movie) => (
                    <Col key={movie.id}>
                        <Card>
                            <Card.Img variant="top" src={"https://source.unsplash.com/random/180x120?sig=" + movie.id}/>
                            <Card.Body>
                                <Card.Title>{movie.title} ({movie.year})</Card.Title>
                                <Card.Text>
                                    {movie.description}
                                </Card.Text>
                                <div className={'text-center d-flex justify-content-evenly'}>
                                    <Button size={'sm'} variant="primary" onClick={() => onSeeDetail(movie.id)}>See
                                        Detail</Button>
                                    <Button size={'sm'} variant="warning"
                                            onClick={() => onUpdateMovie(movie.id)}>update</Button>
                                    <Button size={'sm'} variant="danger"
                                            onClick={() => onDeleteMovie(movie.id)}>Delete</Button>
                                </div>
                                {movie.movie_genre[1] && <Card.Body>
                                    {Object.keys(movie.movie_genre).map(key =>
                                        <Card.Link key={key} href="#">{movie.movie_genre[key]}</Card.Link>
                                    )}
                                </Card.Body>}
                            </Card.Body>
                        </Card>
                    </Col>
                )) : <div className={'text-center'}>belum ada film bos</div>
                }
            </Row>
        </div>
    );
};

export default Home;
