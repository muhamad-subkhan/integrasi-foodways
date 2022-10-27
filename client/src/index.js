import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App";
import App from "./App";
import "./Assets/styles/style.css";
import { CounterContextProvider } from "./context/Data-counter";
import { DataContextProvider } from "./context/DataContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <CounterContextProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </CounterContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
