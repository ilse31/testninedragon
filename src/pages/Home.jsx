import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
{
    return (
        <div>Home
            <div className='container'>
                <ul>
                    <li>            <Link to={ '/login' }>Login</Link>
                    </li>
                    <li><Link to={ '/register' }>Register</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home