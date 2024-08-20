import "./App.css";
import Footer from "./container/footer";
import Header from "./container/header";
import Home from "./pages/home";
import PortfolioApp from "./pages/portfolio-app";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio/:project" element={<PortfolioApp />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
