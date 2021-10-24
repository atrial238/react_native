import React from "react";
// import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import Navigation from "./navigation/Navigation";

import store from "./store/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
