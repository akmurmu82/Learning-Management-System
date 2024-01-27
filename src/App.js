import AllRoutes from "./Routes/AllRoutes";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
