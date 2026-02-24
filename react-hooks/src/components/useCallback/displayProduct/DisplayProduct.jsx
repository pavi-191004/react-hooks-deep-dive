import { useState, useCallback } from "react";
import { productsData } from "./productList";
import CartItem from "./CartItem";
import "./DisplayProduct.css";

const DisplayProduct = () => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");

  console.log("Parent Rendered");

  const handleAddToCart = useCallback(
    (id) => {
      const selectedProduct = products.find((p) => p.id === id);
      setCart((prev) => [...prev, selectedProduct]);
    },
    [products],
  );

  return (
    <>
      <div className={`container ${theme}`}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>

        <h3>Products</h3>

        {products.map((product) => (
          <div key={product.id} className="product-box">
            Name: {product.name} <br />
            Price: {product.price} <br />
            Category: {product.category} <br />
            <button
              className="add-btn"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}

        <CartItem cart={cart} />
      </div>
    </>
  );
};

export default DisplayProduct;
