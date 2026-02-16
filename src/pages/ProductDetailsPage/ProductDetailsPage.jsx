import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div className="container">
      <button className="btn-back" onClick={() => navigate(-1)}>← Назад</button>
      <div className="details-card">
        <div className="details-card__image-side">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details-card__info-side">
          <h1>{product.title}</h1>
          <div className="details-card__price-row">
            <span className="details-card__price">${product.price}</span>
            <span className="details-card__discount">-{product.discountPercentage}%</span>
          </div>
          <div className="details-card__specs">
            <div className="spec-item"><span>Бренд:</span> <span>{product.brand}</span></div>
            <div className="spec-item"><span>Категория:</span> <span>{product.category}</span></div>
            <div className="spec-item"><span>В наличии:</span> <span>{product.stock} шт.</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsPage;