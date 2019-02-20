const dataRequested = () => {
  return {
    type: "FETCH_DATA_REQUESTED"
  };
};

const dataError = error => {
  return {
    type: "FETCH_DATA_ERROR",
    payload: error
  };
};

const dataLoaded = data => {
  return {
    type: "FETCH_DATA_LOADED",
    payload: data
  };
};

const productSelected = productId => {
  return {
    type: "PRODUCT_SELECTED",
    Id: productId
  };
};

const productDeselected = productId => {
  return {
    type: "PRODUCT_DESELECTED",
    Id: productId
  };
};

const productCheckfocused = productId => {
  return {
    type: "PRODUCT_CHECK_FOCUSED",
    Id: productId
  };
};

const productCheckdefocused = productId => {
  return {
    type: "PRODUCT_CHECK_DEFOCUSED",
    Id: productId
  };
};
export {
  dataLoaded,
  dataRequested,
  dataError,
  productSelected,
  productDeselected,
  productCheckfocused,
  productCheckdefocused
};
