import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'


const ImageForm = ({_id, handleOnUpdateImg, myType, myNameAttr, myNameShow}) => {
    
    const [formImg, setFormImg] = useState({
        imgUrl: {}
    })

    const handleChangeImg = async (e) => {
        const { name } = e.target
        const files = await e.target.files[0]
        await setFormImg({[name]: files})
    }
    
    const handleOnSubmitImg = (e) => {
        e.preventDefault()
        handleOnUpdateImg({id:e.target.id}, {image: formImg.imgUrl})
    }

    return (
        <Form id={_id} onSubmit={handleOnSubmitImg}>
        <Form.Group controlId={myNameAttr} >
            <Form.Label>Update {myNameShow}</Form.Label>
            <Form.Control 
            type={myType}
            name={myNameAttr} 
            onChange={handleChangeImg}
            />
        </Form.Group>
        <Button className="mr-3" variant="primary" type="submit" >Update</Button>
    </Form>  
    )
}

export default ImageForm