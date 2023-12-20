import React from 'react'
import Login from './auth/login';
import { Routes, Route, Link } from 'react-router-dom';
import Sign from './auth/sign_up'
import About from './page/about';
import Client from './page/clients';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-primary bg-light ">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to={'/login'} className='nav-link'>Login</Link>

                    </li>
                    <li class="nav-item active">
                        <Link to={'/sign_up'} className='nav-link'>sign up</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to={'/About'} className='nav-link'>About</Link>
                    </li>
                    <li class="nav-item active">
                        <Link to={'/Client'} className='nav-link'>Client</Link>
                    </li>
                </ul>
            </nav>
            

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/sign_up' element={<Sign />} />
                <Route path='/About' element={<About/>} />
                <Route path='/Client' element={<Client/>} />
            </Routes>
        </div>
    )
}

export default Navbar
