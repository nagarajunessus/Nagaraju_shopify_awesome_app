import React from 'react';

function ProductTable({ visibleProducts }){
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {visibleProducts.map((product, index) => (
                    <tr key={index}>
                        <td style={{ padding: "20px" }}>
                            <img className="product-image-table" src={product.image} alt="product image" />
                        </td>
                        <td className="product-title">{product.name}</td>
                        <td>₹{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;