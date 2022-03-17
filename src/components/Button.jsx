import React from 'react'

const Button = ( { onClick } ) =>
{
    return (
        <button onClick={ onClick } type="submit" className="btn btn-primary">Submit</button>
    )
}

export default Button