import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/spinner";
import ProductList from "../../components/product-list";
import { withStoreService } from "../../components/hoc";
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

import ErrorIndicator from "../../components/error-indicator";

class ProductListContainer extends Component {
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
      <ProductList
        product={product}
        productSelected={productSelected}
        productDeselected={productDeselected}
        productCheckfocused={productCheckfocused}
        productCheckdefocused={productCheckdefocused}
      />
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
)(ProductListContainer);
