import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ImportCard from './Card';

const ListProducts = ({ products, handleOnDelete, handleOnUpdate, handleOnUpdateImg }) => { 
    const listItems = products.map((products) => ( // products contiene: { description, name, size, _id, unitaryPrice, imgUrl }
        <ImportCard 
            key={products._id} 
            products={products} 
            handleOnDelete={handleOnDelete}
            handleOnUpdate={handleOnUpdate}
            handleOnUpdateImg={handleOnUpdateImg}
        />
    ))
    
    return (
        <CardColumns className={"card-columns"}>
               {listItems}     
        </CardColumns>
    )

}
export default ListProducts;