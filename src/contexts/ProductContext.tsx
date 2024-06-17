import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

interface ProductContextType {
  products: Product[];
  categories: string[];
  fetchProductsByCategory: (category: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));

    axios.get('https://dummyjson.com/products/category-list')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const fetchProductsByCategory = (category: string) => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products by category:', error));
  };

  const addProduct = (product: Product) => {
    axios.post('https://dummyjson.com/products/add', product)
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error('Error adding product:', error));
  };

  const updateProduct = (updatedProduct: Product) => {
    
    axios.put(`https://dummyjson.com/products/${updatedProduct.id}`, updatedProduct)
      .then(response => {
        setProducts(products.map(product => product.id === updatedProduct.id ? response.data : product));
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const deleteProduct = (id: number) => {
    axios.delete(`https://dummyjson.com/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <ProductContext.Provider value={{ products, categories, fetchProductsByCategory, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
