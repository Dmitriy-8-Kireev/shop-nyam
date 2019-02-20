import React, { Fragment } from "react";

const ItemContent = ({ product }) => {
  const {
    name,
    view,
    portion,
    portionnumb,
    present,
    presentnumb,
    review,
    image,
    weight,
    measure
  } = product;
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ItemContent;
