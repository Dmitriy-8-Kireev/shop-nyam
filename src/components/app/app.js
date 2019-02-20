import React from "react";
import ProductListContainer from "../../containers/product-list-container";

import "./app.scss";

const App = () => {
  return (
    <main className="base">
      <ProductListContainer />
    </main>
  );
};

export default App;
