import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './ProductsPage.css'; 

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(search ? `https://dummyjson.com/products/search?q=${search}` : 'https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [search]);

  return (
    <div className="container">
      <h1 className="page-title">Каталог товаров</h1>
      <div className="search-wrapper">
        <input 
          className="search-input" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Поиск..."
        />
      </div>
      <ProductList products={products} />
    </div>
  );
};
export default ProductsPage;