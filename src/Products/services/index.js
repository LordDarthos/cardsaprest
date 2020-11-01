import axios from 'axios';

const baseUrl = "https://cardsaprest.herokuapp.com";

export async function getProducts () {
    try {
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'GET'
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function saveProducts (productData) {
    try {
        const formData = new FormData()

        formData.append('name', productData.name)
        formData.append('unitaryPrice', productData.unitaryPrice)
        formData.append('size', productData.size)
        formData.append('description', productData.description)
        formData.append('image', productData.image)
        console.log(productData)
        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'POST',
            data: formData
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function deleteProducts (productData) { 
    try {
        const response = await axios({
            url: `${baseUrl}/products/${productData}`,
            method: 'DELETE',
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function updateProducts (productData, productBody) { 
    try {
        console.log(productData, productBody)

        const response = await axios({
            url: `${baseUrl}/products/${productData.id}`,
            method: 'PATCH',
            data: productBody,
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        return response
    } catch (err) {
        console.log(err)
    }
}

export async function updateProductsImg (productData, productBody) { 
    try {
        console.log(productData, productBody)

        const formData = new FormData()

        formData.append('image', productBody.image)
        console.log(formData)

        const response = await axios({
            url: `${baseUrl}/products/${productData.id}`,
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            
        })
        return response
    } catch (err) {
        console.log(err)
    }
}