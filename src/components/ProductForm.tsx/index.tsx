import React, { useState, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './style.css';

type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    images: string[];
    thumbnail?: string;
}
interface ProductFormProps {
  product?: TProduct | null;
  onSubmit: () => void;
}

const ProductForm = ({ product, onSubmit }: ProductFormProps) => {
  const isEditMode = !!product;
  const [formData, setFormData] = useState({
    id: product?.id || Date.now(),
    title: product?.title || '',
    description: product?.description || '',
    category: product?.category || '',
    price: product?.price || 0,
    images: product?.images || [''],
  });

  const productContext = useContext(ProductContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'images') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [value],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productContext) {
      if (isEditMode) {
        productContext.updateProduct(formData);
      } else {
        productContext.addProduct(formData);
      }
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="images" value={formData.images[0]} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">{isEditMode ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
