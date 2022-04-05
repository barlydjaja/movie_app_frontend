import {Button, Col, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MovieForm = () => {
    const [state, setState] = useState({
        title: '',
        release_date: '',
        runtime: '',
        description: '',
        rating: '',
    })
    const onFormSubmit = (e) => {
        e.preventDefault()
        setState({
            title: e.target[0].value,
            release_date: e.target[1].value,
            runtime: e.target[2].value,
            rating: e.target[3].value,
            description: e.target[4].value,
        })
    }

    const emptyState = () => {
        setState({
            title: '',
            release_date: '',
            runtime: '',
            description: '',
            rating: '',
        })
    }

    const addMovie = () => {
        axios.post(`${process.env.REACT_APP_URL}/v1/movies`, state).then(() => {
            alert('berhasil update')
            emptyState()
        })
    }

    useEffect(() => {
        if (state.title && state.rating && state.description && state.runtime && state.release_date) addMovie()
    }, [state])
    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formTitle">
                <Form.Label column sm="3" className={'h6'}>
                    Title
                </Form.Label>
                <Col sm="9">
                    <Form.Control placeholder={"Movie Title"}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
                <Form.Label column sm="3" className={'h6'}>
                    Release Date
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="date"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
                <Form.Label column sm="3" className={'h6'}>
                    Runtime
                </Form.Label>
                <Col sm="9">
                    <Form.Control placeholder="Movie Duration"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
                <Form.Label column sm="3" className={'h6'}>
                    MPAA Rating
                </Form.Label>
                <Col sm="9">
                    <Form.Select aria-label="Default select example">
                        <option>Age Rating</option>
                        <option value="PG">PG</option>
                        <option value="PG13">PG-13</option>
                        <option value="R">R</option>
                        <option value="NC17">NC-17</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
                <Form.Label column sm="3" className={'h6'}>
                    Rating
                </Form.Label>
                <Col sm="9">
                    <Form.Control placeholder={'movie rating'}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formReleaseDate">
                <Form.Label column sm="3" className={'h6'}>
                    Description
                </Form.Label>
                <Col sm="9">
                    <Form.Control as={'textarea'} placeholder="Movie Short Description"/>
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default MovieForm;
