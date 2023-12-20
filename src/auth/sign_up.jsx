import { React, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Login from './login';

const Sign = () => {
  const [verif, setVerif] = useState(false);
  const [userN, setUserN] = useState('');
  const [userE, setUserE] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
   setVerif(true)
    setUserE('')
    setUserN('')
  }
  return (
    <>

  
    { verif ?(<Login/>) : (
      <Container className='align-items-center d-flex ' style={{ height: '100vh' }} >
        <Form onSubmit={handleSubmit} className='w-100'  >
          <Form.Label className='text text-primary'>name</Form.Label>
          <Form.Control type='text' value={userN} onChange={(e) => { setUserN(e.target.value) }} />
          <Form.Label className='text text-primary '>Email</Form.Label>
          <Form.Control type='email' value={userE} onChange={(e) => { setUserE(e.target.value) }} />
          <Form.Label className='text text-primary '>Password</Form.Label>
          <Form.Control type='password' value={userE} onChange={(e) => { setUserE(e.target.value) }} />
          <Form.Label className='text text-primary '>Confirm Password</Form.Label>
          <Form.Control type='password' value={userE} onChange={(e) => { setUserE(e.target.value) }} />
          <Button type='submit' variant={'primary'} className='m-2'> Create </Button>
          <Button type='reset' className='bnt btn-danger m-2'> Annuler </Button>
        </Form>
      </Container>
    )
}
    
</> )
}

export default Sign
