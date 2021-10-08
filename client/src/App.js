import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/manageproducts" component={ManageProducts}></Route>
            <Route path="/addproduct" component={AddNewProduct}></Route>
            <Route path="/editproduct" component={EditProduct}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
