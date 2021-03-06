import {
    FormControl,
    Input,
    FormHelperText,
    FormLabel,
    Box,
    Select,
    Heading,
    Button
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Actions/product'


const AddProduct = () => {

    const [productName, setproductName] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [color, setcolor] = useState('')
    const [listingPrice, setlistingPrice] = useState('')
    const [actualPrice, setactualPrice] = useState('')
    const [stock, setstock] = useState(0)
    const [id, setid] = useState(0)

    const dispatch = useDispatch()

    const handleAddProduct = () => {
        dispatch(addProduct({
            id, productName, imageUrl, description, category, color, listingPrice, actualPrice, stock
        }))
    }

    return (
        <Box m={4}>
            <Heading>Add Product</Heading>
            <FormControl>
                <FormLabel> ID</FormLabel>
                <Input onChange={(e) => { setid(e.target.value) }} type="number" />
                <FormLabel>Course name</FormLabel>
                <Input onChange={(e) => { setproductName(e.target.value) }} type="text" />
                <FormLabel>Image URL </FormLabel>
                <Input onChange={(e) => { setimageUrl(e.target.value) }} type="text" />
                <FormLabel>Course description</FormLabel>
                <Input onChange={(e) => { setdescription(e.target.value) }} type="text" />
                <FormLabel>Category</FormLabel>
                <Select onChange={(e) => { setcategory(e.target.value) }} placeholder="Select product's category">
                    <option>Free courses</option>
                    <option>Paid courses</option>
                </Select>
                <FormLabel> Actual Price</FormLabel>
                <Input onChange={(e) => { setactualPrice(e.target.value) }} type="number" />
                <FormLabel> Listing Price</FormLabel>
                <Input onChange={(e) => { setlistingPrice(e.target.value) }} type="text" />
                <FormLabel> Stock</FormLabel>
                <Input onChange={(e) => { setstock(e.target.value) }} type="number" />
                <Button onClick={handleAddProduct} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>
            </FormControl>
        </Box >
    );
}

export default AddProduct;