import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Brand from "./components/Body/Brand";
import FixedMenu from "./components/FixedMenu";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <FixedMenu />
    </div>
  );
}

export default App;
