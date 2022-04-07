import React from 'react';
import ProductItem from '../components/ProductItem';
import { menudata } from '../data/menu';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
    <section className="main-container">
      <div className="ProductList">
        {menudata.shakes.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        {menudata.lunch.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        {menudata.breakfast.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;