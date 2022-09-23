import React from "react";
import "./App.css";
import WalletContextProvider from "./components/WalletContextProvide";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <WalletContextProvider>
      <div className="App">
        <HomePage />
      </div>
    </WalletContextProvider>
  );
}

export default App;
