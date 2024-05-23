import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Brand from "./components/Body/Brand";
import FixedMenu from "./components/FixedMenu";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
      <FixedMenu />
    </div>
  );
}

export default App;
