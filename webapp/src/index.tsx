import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const gqlClient = new ApolloClient({
  uri: `${
    process.env.REACT_APP_API_SERVER_ADDR
      ? process.env.REACT_APP_API_SERVER_ADDR
      : "http://anteater.iptime.org:4000"
  }/graphql`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
