import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'

const PatchForm = ({_id, handleOnUpdate, myType, myNameAttr, myPlaceholder, myNameShow, myAs, myRows, onInput}) => {
    const [formName, setFormName] = useState({
        name: ''
    })

    const handleChange = async (e) => {
        const { name, value } = e.target
        await setFormName({[name]: value})
        // console.log(formName)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        handleOnUpdate({id:e.target.id},{...formName})
    }

    return (
    <Form id={_id} onSubmit={handleOnSubmit} >
        <Form.Group controlId="PATCH">
            <Form.Control
            type="hidden" 
            name="_method" 
            value="PATCH"
            />
        </Form.Group>
        
        <Form.Group controlId={myNameAttr} >
        <Form.Label>Update {myNameShow}</Form.Label>
            <Form.Control 
            type={myType}
            name={myNameAttr}
            onChange={handleChange}     
            placeholder={myPlaceholder} 
            as={myAs}
            rows={myRows}
            onInput={onInput}
            />
        </Form.Group>
        <Button className="mr-3" variant="primary" type="submit" >Update</Button>
    </Form>
    )
}

export default PatchForm