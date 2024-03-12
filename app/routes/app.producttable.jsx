import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Page,Button } from '@shopify/polaris';
import ProductTable from '../components/ProductTable';
import Pagination from '../components/TablePagination';
import stylesUrl from "~/styles/setup.css";

export const links = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};
const itemsPerPage = 5;

function Producttable() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = data.slice(startIndex, endIndex);

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

    return (
        <Page>
            <ProductTable visibleProducts={visibleProducts} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />

        </Page>
    );
}

export default Producttable;
