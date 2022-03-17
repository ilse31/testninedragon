import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { Api } from '../helpers/API'


const Register = () =>
{
    const [ name, setName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ conFirmPass, setConFirmPass ] = useState( '' )
    const navigate = useNavigate()
    const onClick = () =>
    {
        const data = {
            name, email, password, c_password: conFirmPass
        }
        Api.post( 'register', data )
            .then( ( resp ) =>
            {
                console.log( resp.data.success.token );
                localStorage.setItem( 'token', resp.data.success.token )
                navigate( '/dashboard' )
            } )
            .catch( ( err ) => console.log( err.error )
            )
        setEmail( '' )
        setPassword( '' )
        setName( '' )
        setConFirmPass( '' )
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama</label>
                <input type="text" value={ name } name='name' onChange={ ( e ) => setName( e.target.value ) } className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" value={ email } onChange={ ( e ) => setEmail( e.target.value ) } className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" value={ password } onChange={ ( e ) => setPassword( e.target.value ) } className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                <input type="password" value={ conFirmPass } onChange={ ( e ) => setConFirmPass( e.target.value ) } className="form-control" id="confirm_password" />
            </div>
            <Button onClick={ onClick } />
        </div >
    )
}

export default Register