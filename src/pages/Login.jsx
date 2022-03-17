import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { Api } from '../helpers/API'

const Login = () =>
{
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const navigate = useNavigate()
    const onClick = () =>
    {
        const data = { email, password }
        Api.post( 'login', data )
            .then( ( resp ) =>
            {
                console.log( resp.data.success.token );
                localStorage.setItem( 'token', resp.data.success.token )
                navigate( '/dashboard' )
            } )
            .catch( ( err ) => console.log( err.error )
            )
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" value={ password } onChange={ ( e ) => setPassword( e.target.value ) } className="form-control" id="password" />
            </div>
            <Button onClick={ onClick } />
        </div >
    )
}

export default Login