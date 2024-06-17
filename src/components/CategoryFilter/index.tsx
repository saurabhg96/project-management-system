import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import CategoryItem from '../CategoryItem';
import './style.css';

const CategoryFilter = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) return null;

  const { categories, fetchProductsByCategory } = productContext;

  return (
    <div className="category-filter">
      <h2 className="category-filter-title">Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryItem key={category} category={category} fetchProductsByCategory={fetchProductsByCategory} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;