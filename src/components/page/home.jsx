import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';


const Home = ({ nom }) => {
    const [task, setTask] = useState('')
    const [taskE, setTaskE] = useState(false)
    const [taskC, setTaskC] = useState(false)
    const [listTask, setListTask] = useState([])
    const [taskN, setTaskN] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        setListTask([...listTask, task])

    }
    function DT(e) {
        const itm = e.target.value;
        setListTask(listTask.filter((items) => items !== itm))
        setTaskE(false)
        setTaskC(false)

    }
    function ST(e) {
        const itm = e.target.value;
        setTaskE(itm)
        setTaskC(true)
    }
    function CT(e) {
        const itm = e.target.value;
        alert(taskN)
        setTaskE(itm)
        setTaskC(true)
    }
    useEffect(() => {
        setTaskE(false)
        setTaskC(false)
    }, [setTaskE])


    return (
        <>
            <h1 className='text text-lg-center'>Hello {nom}</h1>
            <Container className='' style={{ height: '100vh' }}>
                <Form onSubmit={handleSubmit} className='w-100 m-4'>
                    <Row className="align-items-center">
                        <Col xs={6} className="my-2">
                            <Form.Control type="text" name="task" placeholder="Add a new task" value={task} onChange={(e) => { setTask(e.target.value) }} />
                        </Col>
                        <Col xs={6} className="my-2">
                            <Button type='submit' variant="success">Add</Button>
                        </Col>
                    </Row>
                </Form>
                <ListGroup>
                    {listTask.map((e, k) => (
                        <ListGroup.Item key={k} className="d-flex justify-content-between align-items-center">
                            {e}

                            {taskE ? (
                                
                                    <Form.Control type="text" name="task" placeholder="Add a new task" value={taskN} onChange={(e) => { setTaskN(e.target.value) }} />
                                    
                            ) : ('')}



                            <Button variant='danger' value={e} onClick={DT}>Delete</Button>
                            {taskC ? (<Button variant='success' value={e} onClick={CT}>Confirm</Button>) : (<Button variant='success' value={e} onClick={ST}>Set</Button>)}
                        </ListGroup.Item>
                    ))}
                </ListGroup>



            </Container>

        </>

    );
};

export default Home;