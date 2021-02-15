import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "./theme";
import { createStore } from "redux";
import { rootReducer } from "./reducer/reducer";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const store = new createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Theme>
          <App />
        </Theme>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
