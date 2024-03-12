import React from 'react';
import { Grid } from '@shopify/polaris';
function ProductDetail({ selectedProduct, onGoBack }) {
    return (
        <>
            <div className="custom-cards" >
                <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <div>
                            <div className='product-image1'>
                                <img className="product-images" src={selectedProduct.image} alt="product image" />
                            </div>
                        </div>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                        <div className='discript-part'>
                            <h2 className="product-title1">{selectedProduct.name}</h2>
                            <div className='card-sec'>
                                <div className='price-quant'>
                                    <p className="price">price: ₹{selectedProduct.price}</p>
                                    <p className="category">{selectedProduct.quantity}</p>
                                </div>
                                <p className='discr-heading'>Description</p>
                                <p className="description">{selectedProduct.description}</p>
                            </div>
                            {/* Add other details as needed */}
                            <button onClick={onGoBack} className='Back-btn'>Go Back</button>
                        </div>
                    </Grid.Cell>
                </Grid>
            </div>
        </>
    );
}

export default ProductDetail;

