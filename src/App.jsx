import React from "react";
import Carts from "./components/Carts";
import Foods from "./components/Foods";

const App = () => {
  return (
    <React.Fragment>
      <Foods />
      <Carts />
    </React.Fragment>
  );
};

export default App;
