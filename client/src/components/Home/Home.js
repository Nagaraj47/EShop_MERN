import "./Home.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    let searchTerm = e.target.value;
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      let newFilteredData = products.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredProducts(newFilteredData);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setproducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="search-bar">
          <div className="search-input">
            <div className="input">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
            <div className="search-bar-icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        {products.length === 0 ? (
          <div className="loading">Loading.....</div>
        ) : (
          <div className="product-list">
            {filteredProducts.length !== 0 ? (
              filteredProducts.map((product) => (
                <div className="product" key={product._id}>
                  <Link to={`/products/${product._id}`}>
                    <div className="product-img">
                      <img src={product.image} alt={product.name}></img>
                    </div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-category">{product.category}</div>
                    <div className="product-price">${product.price}</div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="no-products">No Products Found!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
