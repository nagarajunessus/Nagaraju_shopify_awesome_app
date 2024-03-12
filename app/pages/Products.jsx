import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@shopify/polaris';
import ProductDetails from '../components/Productdetails';
import ProductsList from '../components/ProductsList';
import stylesUrl from "~/styles/setup.css";

export const links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

function Products() {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/productData');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredProducts = data.filter((product) =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filteredProducts);
    }, [searchInput, data]);

    const handleProductClick = (product) => {
        // Set the selected product when a card is clicked
        setSelectedProduct(product);
    };

    const handleGoBack = () => {
        setSelectedProduct(null);
    };
    return (
        <>
            <TextField
                label="Search Products"
                value={searchInput}
                onChange={(value) => setSearchInput(value)}
            />

            <div style={{ marginTop: '30px' }}>
                {selectedProduct ? (
                    <ProductDetails selectedProduct={selectedProduct} onGoBack={handleGoBack} />
                ) : (
                    <ProductsList filteredData={filteredData} onClick={handleProductClick} />
                )}
            </div>
        </>
    );
}

export default Products;