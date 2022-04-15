import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About/About";
import Footer from "./Pages/Home/About/Login/Shared/Footer/Footer";
import Header from "./Pages/Home/About/Login/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <h1>Whats your problem</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
