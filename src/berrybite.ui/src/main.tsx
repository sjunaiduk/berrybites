import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const theme = extendTheme({
  config: {
    disableTransitionOnChange: false,
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <ChakraBaseProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools></ReactQueryDevtools>
      <App />
    </QueryClientProvider>
  </ChakraBaseProvider>
  // </React.StrictMode>
);
