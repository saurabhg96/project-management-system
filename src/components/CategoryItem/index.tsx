import React from 'react';

interface CategoryItemProps {
  category: string;
  fetchProductsByCategory: (category: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, fetchProductsByCategory }) => {
  return (
    <div className="category-item" onClick={() => fetchProductsByCategory(category)}>
      {category}
    </div>
  );
};

export default CategoryItem;
