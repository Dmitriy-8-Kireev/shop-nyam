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

export { dataLoaded, dataRequested, dataError };
