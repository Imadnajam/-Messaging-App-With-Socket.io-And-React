import { React, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Home from '../page/home'

const Login = () => {
  const [userN, setUserN] = useState('')
  const [userE, setUserE] = useState('')
  const [verif, setVerif] = useState(false)
  const [hire, setHire] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setHire(true);
    setVerif(true);
  }
  return (
    <>
      {hire && verif ? (
        <Home nom={userN} />
      ) : (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
          <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Label className='text text-primary'>Name</Form.Label>
            <Form.Control type='text' value={userN} onChange={(e) => setUserN(e.target.value)} />
            <Form.Label className='text text-primary'>Email</Form.Label>
            <Form.Control type='email' value={userE} onChange={(e) => setUserE(e.target.value)} />
            <Button type='submit' className='m-2'>
              Submit
            </Button>
            <Button type='reset' variant={'danger'} className='m-2'>
              Annuler
            </Button>
          </Form>
        </Container>
      )}
    </>
  );

}

export default Login
