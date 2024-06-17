import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import ProductItem from '../ProductItem';
import ProductForm from '../ProductForm.tsx';
import CategoryFilter from '../CategoryFilter';
import './style.css';

type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    images: string[];
}
const ProductList = () => {
  const productContext = useContext(ProductContext);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editProduct, setEditProduct] = useState<TProduct | null>(null);

  if (!productContext) return null;

  const { products, deleteProduct } = productContext;

  const handleEdit = (product: TProduct) => {
    setEditProduct(product);
    setFormVisible(true);
  };

  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  return (
    <div className="product-list">
      <CategoryFilter />
      <button onClick={() => setFormVisible(!isFormVisible)} className='add-product'>Add Product</button>
      {isFormVisible && (
        <ProductForm product={editProduct} onSubmit={() => {
          setFormVisible(false);
          setEditProduct(null);
        }} />
      )}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <ProductItem product={product} />
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
