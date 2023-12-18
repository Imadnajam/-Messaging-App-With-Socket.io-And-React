import {React,useState} from 'react'
import { Container,Form,Button} from 'react-bootstrap'
const Login = () => {
    const [userN,setUserN]=useState('')
    const [userE,setUserE]=useState('')
    function handleSubmit(e){
    e.preventDefault();
    alert(userE)
    setUserE('')
    setUserN('')
    }
  return (
    <Container className='align-items-center d-flex' style={{height:'100vh'}} >
      <Form onSubmit={handleSubmit} className='w-100' >
        <Form.Label className='text text-primary'>name</Form.Label>
        <Form.Control type='text' value={userN} onChange={(e)=>{setUserN(e.target.value)}} />
        <Form.Label className='text text-primary '>Email</Form.Label>
        <Form.Control type='email' value={userE} onChange={(e)=>{setUserE(e.target.value)}}  />
        <Button type='submit' className='bnt btn-primary'> Submit </Button>
        <Button type='reset' className='bnt btn-danger '> Annuler </Button>
      </Form>
    </Container>
  )
}

export default Login
