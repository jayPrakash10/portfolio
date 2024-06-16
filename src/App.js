import "./App.css";
import Footer from "./container/footer";
import Header from "./container/header";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Resume />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
