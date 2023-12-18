import React from 'react'
import Login from './login';
import { Routes, Route, Link } from 'react-router-dom';
import Sign from './sign_up'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to={'/login'} className='nav-link'>Login</Link>

                    </li>
                    <li class="nav-item active">
                        <Link to={'/sign_up'} className='nav-link'>sign up</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/sign_up' element={<Sign />} />
            </Routes>
        </div>
    )
}

export default Navbar
