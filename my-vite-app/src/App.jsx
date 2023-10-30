import "./App.css";
import BottomContainer from "./components/BottomContainer/BottomContainer";
import MiddleContainer from "./components/MiddleContainer/MiddleContainer";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <div className="app">
        <Nav />
        <MiddleContainer />
        <BottomContainer />
    </div>
  );
}

export default App;
