import React, { useState, useEffect } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProducts from './ListProducts';
import ImportForm from './Form';
import { saveProducts, getProducts, deleteProducts, updateProducts, updateProductsImg } from '../services'
import Loading from './Loading';
import { Container, Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    const handleModalShow = () => setIsModalOpen(true);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    async function LoadProducts () {
        const response = await getProducts();
        
        if(response.status === 200 || response.status === 204) {
            setProducts(response.data.products)
        }

        setIsLoading(false);
    }

    useEffect(() => {
        LoadProducts()
    }, [])

    const handleSubmit = async (data) => {
        await saveProducts(data)
        LoadProducts()
        setIsModalOpen(false)
    }
    
    const handleOnDelete = async (id) => {
        console.log(id) ///aqui hacer el delete
        await deleteProducts(id)
        LoadProducts()
    }

    const handleOnUpdate = async (id, data) => {
        await updateProducts(id, data)
        LoadProducts()
    }

    const handleOnUpdateImg = async (id, data) => {
        await updateProductsImg(id, data) 
        LoadProducts()
    }
    
    return (
        <>
            <Container>
            <Header title="Products" />
            <AddButton handleShow={handleModalShow}/>
            {
                isLoading && <Loading />
            }

            {
                !isLoading && !products.length && <h2 className="has-text-centered">You don't have products</h2>
            }

            {
                !isLoading && <ListProducts products={products} handleOnDelete={handleOnDelete} handleOnUpdate={handleOnUpdate} handleOnUpdateImg={handleOnUpdateImg} />
            }

            <Modal show={isModalOpen} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ImportForm handleSubmit={handleSubmit} handleHide={handleModalClose}  />
              </Modal.Body>
              <Modal.Footer>
                  :'D
              </Modal.Footer>
            </Modal>
            </Container>
        </>
    )
}

export default ProductLayout;