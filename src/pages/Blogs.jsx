import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import { Api } from '../helpers/API'

const Blogs = () =>
{
    const [ id, setId ] = useState( '' )
    const [ name, setName ] = useState( '' )
    const [ disc, setDisc ] = useState( '' )
    const [ listCategory, setListCategory ] = useState( '' )
    const [ category, setCategory ] = useState( [] )


    const onChange = ( e ) =>
    {
        console.log( e.target.value );
        setListCategory( e.target.value )
    }

    const getBlogs = () =>
    {
        Api.get( 'get_blogs' )
            .then( ( resp ) =>
            {
                console.log( resp );
                setCategory( resp.data.success )
            } )
            .catch( err => console.log( err ) )
    }

    const getCategory = () =>
    {
        Api.get( 'get_category' )
            .then( ( resp ) =>
            {
                setCategory( resp.data.success )
            } )
            .catch( err => console.log( err ) )
    }


    const postBlogs = () =>
    {
        Api.post( '/post_blogs', { id, name, disc, category_id: listCategory } ).then( resp => console.log( resp ) ).catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getBlogs()
        getCategory()
    }, [] )


    return (
        <>
            <Navbar />
            <div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">id</label>
                    <input type="number" value={ id } onChange={ ( e ) => setId( e.target.value ) } className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">name</label>
                    <input type="text" value={ name } onChange={ ( e ) => setName( e.target.value ) } className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Description</label>
                    <input type="text" value={ disc } onChange={ ( e ) => setDisc( e.target.value ) } className="form-control" id="password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="">category</label>
                    <select onChange={ onChange } className="form-select" aria-label="Default select example">
                        {
                            category.map( ( item ) =>
                                <option defaultValue={ 1 } key={ item.id } value={ item.id }>{ item.name }</option>
                            )
                        }
                    </select>
                </div>
                <Button onClick={ postBlogs } />
            </div >
            Blogs</>
    )
}

export default Blogs