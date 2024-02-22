// Entry point
import './App.css'

import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";

import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
