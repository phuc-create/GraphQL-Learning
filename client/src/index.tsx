import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./Contexts/Context";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloConfig";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
