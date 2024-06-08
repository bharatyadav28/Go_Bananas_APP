import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ColorContextProvider from "./store/ColorContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorContextProvider>
        <App />
      </ColorContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
