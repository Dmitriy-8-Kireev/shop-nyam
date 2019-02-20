const initialState = {
  product: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUESTED":
      return {
        product: [],
        loading: true,
        error: null
      };

    case "FETCH_DATA_ERROR":
      return {
        product: [],
        loading: true,
        error: action.payload
      };

    case "FETCH_DATA_LOADED":
      return {
        product: action.payload,
        loading: false,
        error: null
      };

    case "PRODUCT_SELECTED":
      return Object.assign({}, state, {
        product: state.product.map(product => {
          if (product.id === action.Id && product.access === true) {
            return Object.assign({}, product, {
              check: true
            });
          }
          return product;
        })
      });

    case "PRODUCT_DESELECTED":
      return Object.assign({}, state, {
        product: state.product.map(product => {
          if (product.id === action.Id && product.access === true) {
            return Object.assign({}, product, {
              check: false,
              checkHover: false
            });
          }
          return product;
        })
      });

    case "PRODUCT_CHECK_FOCUSED":
      return Object.assign({}, state, {
        product: state.product.map(product => {
          if (
            product.id === action.Id &&
            product.access === true &&
            product.check === true
          ) {
            return Object.assign({}, product, {
              checkHover: true
            });
          }
          return product;
        })
      });

    case "PRODUCT_CHECK_DEFOCUSED":
      return Object.assign({}, state, {
        product: state.product.map(product => {
          if (
            product.id === action.Id &&
            product.access === true &&
            product.check === true
          ) {
            return Object.assign({}, product, {
              checkHover: false
            });
          }
          return product;
        })
      });

    default:
      return state;
  }
};

export default reducer;
