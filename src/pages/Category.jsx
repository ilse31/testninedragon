import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import { Api } from '../helpers/API'

const Category = () =>
{
    const [ category, setcategory ] = useState( '' )
    const onClick = () =>
    {
        Api.post( 'create_category', { name: category } )
            .then( ( resp ) => console.log( resp ) )
            .catch( err => console.log( err ) )
    }

    const [ listCategory, setListCategory ] = useState( [] )

    const getCategory = () =>
    {
        Api.get( 'get_category' )
            .then( ( resp ) =>
            {
                setListCategory( resp.data.success )
            } )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getCategory()
    }, [] )


    return (
        <>
            <Navbar />
            Category
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Create Category</label>
                <input type="email" value={ category } onChange={ ( e ) => setcategory( e.target.value ) } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <Button onClick={ onClick } />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">First</th>
                    </tr>
                </thead>
                <tbody>
                    { listCategory.map( ( item, index ) =>
                        <tr key={ index }>
                            <td>{ index }</td>
                            <td>{ item.name }</td>
                        </tr> )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Category