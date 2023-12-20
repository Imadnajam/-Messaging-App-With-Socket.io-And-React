import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Client = () => {
    const [users, setUsers] = useState([]);
    const [pas, setPas] = useState(1);
    async function fetchTrendingPersons(pas) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=0269e1f69afd6ff169f8a6a2d9f0dc4d&page=${pas}`);
            const data = await response.json();
            setUsers(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    function Next() {
        setPas(pas + 1)
    }
    function Prev() {
        if (pas > 1) {
            setPas(pas - 1)
        }

    }
    useEffect(() => {
        fetchTrendingPersons(pas);
    }, [pas]);

    return (
        <Container>

            <Row>
                {users.map((person, index) => (
                    <Col key={index} xs={12} md={4}>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt={person.title} />
                        <p style={{ color: 'black' }}>{person.name}</p>
                    </Col>
                ))}
            </Row>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <Button onClick={Prev} variant='secondary' className='m-2'>Previous </Button>

                    </li>

                    <li class="page-item">
                        <Button onClick={Next} className='m-2'>Next </Button>

                    </li>
                </ul>
            </nav>
        </Container>

    );
}

export default Client;
