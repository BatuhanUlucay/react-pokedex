import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PokemonInfo from "./pages/PokemonInfo";
import Footer from "./components/layout/Footer";

function App() {
  // You do not have to put the provider here. I think it would be more appropriate if you put it inside Home.js
  // You are exposing the context to the components do not use the component.
  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/pokemons/:pokemon" element={<PokemonInfo />} />
              {/*<Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
