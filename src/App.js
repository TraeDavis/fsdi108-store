import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to Organika</h1>
      <div className="product-container">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
