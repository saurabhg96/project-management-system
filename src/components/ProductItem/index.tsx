import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

type TProduct = {
    id: number,
    thumbnail?: string,
    title: string,
    price: number,
    images: string[]
}

type TProductProps = {
    product: TProduct
}
const ProductItem: React.FC<TProductProps> = ({ product }) => {
    return (
      <div className="product-item">
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail || product.images[0]} alt={product.title} className="product-item-image" />
          <div className="product-item-details">
            <h3 className="product-item-title">{product.title}</h3>
            <p className="product-item-price">${product.price}</p>
          </div>
        </Link>
      </div>
    );
  };
  
  export default ProductItem;