import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';


const Client = () => {
    const [films, setfilms] = useState([]);
    const [pas, setPas] = useState(1);
    const [movieSerch, setMovieSerch] = useState('');
    const [movieSerchL, setMovieSerchL] = useState([]);
    const [shF, setShF] = useState(false)
    async function fetchTrendingPersons(pas) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d&page=${pas}`);
            setfilms(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    async function findFilm(id) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d`);
            setMovieSerchL(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    function searchMovie() {
        const fil = films.find((item) => item.title == movieSerch)
        findFilm(fil.id)
        setShF(true)

    }

    function Next() {
        setPas(pas + 1);
    }

    function Prev() {
        if (pas > 1) {
            setPas(pas - 1);
        }
    }

    useEffect(() => {
        fetchTrendingPersons(pas);
    }, [pas]);

    return (
        <Container>
            <div className="input-group mb-3">
                <input type="search" className="form-control" placeholder="Search" value={movieSerch} onChange={(e) => { setMovieSerch(e.target.value) }} />
                <button className="btn btn-primary" type="button" onClick={searchMovie}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {shF ? (<>
                <Row className="align-items-center d-flex" style={{ height: '100vh' }}>
                    <Col xs={12} md={4}>
                        <img
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieSerchL.poster_path}`}
                            alt={movieSerchL.original_title}
                        />
                        <h2 style={{ color: '#BE3144' }}>{movieSerchL.original_title}</h2>
                        <span>
                            <strong style={{ color: '#872341' }}>Release Date: {movieSerchL.release_date}</strong>
                        </span>
                        <p>{movieSerchL.overview}</p>
                    </Col>
                </Row>


            </>)
                :
                (<>
                    <Row>
                        {films.map((person, index) => (
                            <Col key={index} xs={12} md={4}>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.poster_path}`} alt={person.title} />
                                <p style={{ color: 'black' }}>{person.title}</p>
                            </Col>
                        ))}
                    </Row>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <Button onClick={Prev} variant="secondary" className="m-2">
                                    Previous
                                </Button>
                            </li>
                            <li className="page-item">
                                <Button onClick={Next} className="m-2">
                                    Next
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </>)

            }

        </Container>
    );
};

export default Client;
