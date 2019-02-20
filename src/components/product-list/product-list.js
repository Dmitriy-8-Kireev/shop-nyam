import React from "react";
import ProductListItem from "../product-list-item";

import "./product-list.scss";

const ProductList = ({
  product,
  productSelected,
  productDeselected,
  productCheckfocused,
  productCheckdefocused
}) => {
  return (
    <div className="base-container">
      <h2 className="title">Ты сегодня покормил кота?</h2>
      <ul className="product-list">
        {product.map(product => {
          return (
            <li
              key={product.id}
              className={
                product.check
                  ? "product-list-item product-list-item__check"
                  : product.access
                  ? "product-list-item"
                  : "product-list-item product-list-item__disabled "
              }
            >
              <ProductListItem
                product={product}
                productSelected={productSelected}
                productDeselected={productDeselected}
                productCheckfocused={productCheckfocused}
                productCheckdefocused={productCheckdefocused}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
