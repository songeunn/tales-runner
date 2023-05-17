import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import "../src/styles/custom.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { hydrate } from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root/root";
import ErrorBoundary from "./components/ErrorBoundary";
import NoticePage from "./routes/NoticePage";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notice",
    element: <NoticePage />,
    errorElement: <ErrorBoundary />,
  },
]);

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
      <RouterProvider router={router} />
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
