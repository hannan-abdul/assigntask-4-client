import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Home/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import ProductList from "./components/ProductManagement/ProductList/ProductList";
import AddProduct from "./components/ProductManagement/AddProduct/AddProduct";
import ProductDetails from "./components/Home/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<ProductList />} />
          <Route path="/dashboard/add-product" element={<AddProduct />} />
          <Route path="/product/:productKey" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
