import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import "../src/styles/custom.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { hydrate } from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root/root";
import ErrorBoundary from "./components/ErrorBoundary";
import NoticePage from "./routes/NoticePage";
import ToolsPage from "./routes/ToolsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/tools",
    element: <ToolsPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notice",
    element: <NoticePage />,
    errorElement: <ErrorBoundary />,
  },
]);

// const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//     </Provider>,
//     rootElement
//   );
// } else {
//   root.render(
//     <Provider store={store}>
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//     </Provider>
//   );
// }

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
  // </React.StrictMode>
);
