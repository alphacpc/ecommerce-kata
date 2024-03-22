import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import { router } from './routers';
import "./Assets/styles/index.css";
import "./Assets/styles/responsive.css";

import { Provider } from 'react-redux';
import { store } from './utils/redux/store';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);