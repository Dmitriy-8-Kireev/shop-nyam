import React, { Component } from "react";
import ProductListItem from "../product-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";

import { withStoreService } from "../hoc";
import {
  dataLoaded,
  dataRequested,
  dataError,
  productSelected,
  productDeselected,
  productCheckfocused,
  productCheckdefocused
} from "../../actions";
import { compose } from "../../utils";

import "./product-list.scss";
import ErrorIndicator from "../error-indicator";

class ProductList extends Component {
  componentDidMount() {
    const {
      datastoreService,
      dataLoaded,
      dataRequested,
      dataError
    } = this.props;
    dataRequested();
    datastoreService
      .getData()
      .then(data => dataLoaded(data))
      .catch(err => dataError(err));
  }

  render() {
    const {
      product,
      loading,
      error,
      productSelected,
      productDeselected,
      productCheckfocused,
      productCheckdefocused
    } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    if (loading) {
      return <Spinner />;
    }
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
  }
}

const mapStateToProps = ({ product, loading, error }) => {
  return { product, loading, error };
};

const mapDispatchToProps = {
  dataLoaded,
  dataRequested,
  dataError,
  productSelected,
  productDeselected,
  productCheckfocused,
  productCheckdefocused
};

export default compose(
  withStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductList);
