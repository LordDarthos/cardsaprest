import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ImportForm = ({handleSubmit, handleHide }  ) => {
    const [formValues, setFormValues] = useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: '',
        refWrapper: React.createRef()
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name]: value})
    }
    
    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({ ...formValues, image: formValues.refWrapper.current.files[0]})
        console.log(formValues)
    }

    return (
        <Form onSubmit={_handleSubmit} >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                  type="text" 
                  name="name" 
                //   value={formValues.name}
                  onChange={handleChange} 
                  placeholder="Enter Name" 
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Unitary Price</Form.Label>
              <Form.Control 
                  type="number" 
                  name="unitaryPrice" 
                //   value={formValues.unitaryPrice}
                  onChange={handleChange} 
                  placeholder="Enter Unitary Price" 
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Size</Form.Label>
              <Form.Control 
                  type="number" 
                  name="size" 
                //   value={formValues.size}
                  onChange={handleChange} 
                  placeholder="Enter Size" 
                  onInput = {(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                  }} 
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                  as="textarea"
                  rows="3"
                  name="description" 
                //   value={formValues.description}
                  onChange={handleChange} 
                  placeholder="Enter Description" 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control 
                    type="file"
                    ref={formValues.refWrapper}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleHide}>
                Submit
            </Button>
            <Button className="mx-2" variant="secondary" type="button" onClick={handleHide}>
                Close
            </Button>
        </Form>
    )
}

export default ImportForm;