import { lazy, Suspense } from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./container/header";
const Footer = lazy(() => import("./container/footer"));
const PortfolioApp = lazy(() => import("./pages/portfolio-app"));

function App() {
  return (
    <div>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="portfolio/:project"
              element={
                <Suspense>
                  <PortfolioApp />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
