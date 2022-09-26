import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import WalletContextProvider from "./components/WalletContextProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <WalletContextProvider>
        <div className="App">
          <HomePage />
        </div>
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default App;
