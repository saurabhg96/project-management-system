import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import './style.css';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productContext = useContext(ProductContext);

  if (!productContext && !id) return null;

  if (!productContext?.products) {
    return <div>No products available</div>;
  }

  const { products } = productContext;
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h2 className="product-title">{product.title}</h2>
      <img className="product-image" src={product.images[0]} alt={product.title} />
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
