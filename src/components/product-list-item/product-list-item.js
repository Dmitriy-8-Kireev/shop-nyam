import React, { Fragment } from "react";
import ItemContent from "./item-content";

import "./product-list-item.scss";

const ProductListItem = ({
  product,
  productSelected,
  productDeselected,
  productCheckfocused,
  productCheckdefocused
}) => {
  const {
    id,
    title,
    access,
    description,
    question,
    button,
    disabledtext,
    check,
    revoke,
    checkHover
  } = product;
  if (check) {
    return (
      <Fragment>
        <div
          className="product-list-element"
          onClick={() => productDeselected(id)}
          onMouseLeave={() => productCheckdefocused(id)}
          onMouseEnter={() => productCheckfocused(id)}
        >
          {checkHover ? (
            <p className="product-revoke">{revoke}</p>
          ) : (
            <p href="#" className="product-title">
              {title}
            </p>
          )}
          <ItemContent product={product} />
        </div>
        {access ? (
          <div className="product-description">{description} </div>
        ) : (
          <div className="product-disabled">{disabledtext} </div>
        )}
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="product-list-element" onClick={() => productSelected(id)}>
        <p href="#" className="product-title">
          {title}
        </p>
        <ItemContent product={product} />
      </div>

      {access ? (
        <Fragment>
          <div className="product-question">
            {question}
            <span
              className="product-button"
              onClick={() => productSelected(id)}
            >
              {button}
            </span>
            .
          </div>{" "}
        </Fragment>
      ) : (
        <div className="product-disabled">{disabledtext} </div>
      )}
    </Fragment>
  );
};

export default ProductListItem;
