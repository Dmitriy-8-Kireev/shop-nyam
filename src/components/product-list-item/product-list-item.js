import React, { Fragment } from "react";
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
    name,
    view,
    portion,
    portionnumb,
    present,
    presentnumb,
    review,
    image,
    description,
    question,
    button,
    weight,
    measure,
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

          <div className="product-contents">
            <h2 className="product-name">
              {name}
              <span className="product-view">{view}</span>
            </h2>
            <p className="product-portion">
              <span className="product-portion-numb">{portionnumb}</span>
              {portion}
            </p>
            <p className="product-present">
              <span className="product-present-numb">{presentnumb}</span>
              {present}
            </p>
            <p className="product-review">{review}</p>
          </div>
          <div className="product-size ">
            <span className="product-size-weight">{weight}</span>
            <span className="product-size-measure">{measure}</span>
          </div>
          <div className="product-cover">
            <img src={image} alt="cover" className="product-cover-img" />
          </div>
        </div>
        {access ? (
          <Fragment>
            <div className="product-description">{description} </div>
          </Fragment>
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

        <div className="product-contents">
          <h2 className="product-name">
            {name}
            <span className="product-view">{view}</span>
          </h2>
          <p className="product-portion">
            <span className="product-portion-numb">{portionnumb}</span>
            {portion}
          </p>
          <p className="product-present">
            <span className="product-present-numb">{presentnumb}</span>
            {present}
          </p>
          <p className="product-review">{review}</p>
        </div>
        <div className="product-size ">
          <span className="product-size-weight">{weight}</span>
          <span className="product-size-measure">{measure}</span>
        </div>
        <div className="product-cover">
          <img src={image} alt="cover" className="product-cover-img" />
        </div>
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
