import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import ProductListing from "./Containers/ProductListing";
import ProductDetail from "./Containers/ProdcutDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetail} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
