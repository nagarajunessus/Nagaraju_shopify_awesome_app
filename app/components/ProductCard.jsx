import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="custom-card" onClick={() => onClick(product)}>
      <img className="product-image" src={product.image} alt="product image" />
      <h2 className="product-title">{product.name}</h2>
      <div className='card-sec'>
        <p className="price">price: ₹{product.price}</p>
        <p className="category">{product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
