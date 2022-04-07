import React, { useContext, useState } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import ProductDetail from '../containers/ProductDetail';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg'

const ProductItem = ({ product }) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		if(state.cart.includes(item)) {
			return;
		} else {
			addToCart(item);
		}
	}

	return (
    <div className="ProductItem">
      <img
        src={product.image}
        loading="lazy"
        alt={product.title}
        className="productImage"
        onClick={() => setToggleProduct(!toggleProduct)}
      />
      <div className="product-info">
        <div className="product-text">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <div className="product-price-btn" onClick={() => handleClick(product)}>
          <button type="button">Add</button>
        </div>
      </div>
      {toggleProduct && (
        <ProductDetail
          product={product}
          setToggleProduct={setToggleProduct}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default ProductItem;