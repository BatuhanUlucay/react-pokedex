import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen">
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;
