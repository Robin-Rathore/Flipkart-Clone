import React from 'react';
import './productList.css';

const Product = ({ product, onClick }) => {
  return (
    <div className="product-container" onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="product-image">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="product-details">
        <div className="product-description" style={{maxWidth:"180px"}}>
          {product.description.slice(0,55)}...
        </div>
        <div className="product-price">
          <span className="product-cut-price">{product.cutPrice}</span>
          <span className="percentage">{product.percentage}</span>
          <br />
          <span className="product-discounted-price">
            {product.discountedPrice}
          </span>
        </div><br /><br />
        <div className="product-buy-button">
          <button style={{width:"100px",height:"50px"}}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
