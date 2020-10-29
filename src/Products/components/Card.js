import React from 'react';
import { Card, Button} from 'react-bootstrap';
import PatchForm from './PatchForm';
import ImageForm from './ImageForm';


const ImportCard = ({products,handleOnDelete, handleOnUpdate, handleOnUpdateImg}) => {
    
    return (
    <Card >                
        <Card.Img variant="top" src={products.imgUrl} className="w-100"  />    
        <Card.Body>
            <ImageForm 
                _id={products._id}
                handleOnUpdateImg={handleOnUpdateImg}
                myType={"file"}
                myNameAttr={"imgUrl"}
                myNameShow={"Image"}
            />
        <Card.Title>Name: {products.name}</Card.Title>
        <PatchForm
            _id={products._id}
            handleOnUpdate={handleOnUpdate}
            myType={"text"}
            myNameAttr={"name"}
            myPlaceholder={"Enter name"}
            myNameShow={"Name"}
        />
        <Card.Text>Unitary Price: {products.unitaryPrice}</Card.Text>
        <PatchForm
            _id={products._id}
            handleOnUpdate={handleOnUpdate}
            myType={"number"}
            myNameAttr={"unitaryPrice"}
            myPlaceholder={"Enter unitary price"}
            myNameShow={"Unitary Price"}
        />
        <Card.Text>Size: {products.size}</Card.Text>
        <PatchForm
            _id={products._id}
            handleOnUpdate={handleOnUpdate}
            myType={"number"}
            myNameAttr={"size"}
            myPlaceholder={"Enter size"}
            myNameShow={"Size"}
            onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
            }}
        />
        <Card.Text>Description: {products.description}</Card.Text>
        <PatchForm
            _id={products._id}
            handleOnUpdate={handleOnUpdate}
            myType={"text"}
            myNameAttr={"description"}
            myPlaceholder={"Enter Description"}
            myNameShow={"Description"}
            myAs={"textarea"}
            myRows={"3"}
            
        />
        </Card.Body>
        <Card.Footer>
            <Button variant="secondary" type="button" onClick={() => handleOnDelete(products._id)}>Delete</Button>
        </Card.Footer>
    </Card>
    )
}

export default ImportCard