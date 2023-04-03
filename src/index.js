import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import "../src/styles/custom.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { hydrate } from "react-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
