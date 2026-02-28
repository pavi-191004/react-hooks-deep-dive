import { useState, useCallback } from "react";
import { productsData } from "./productList";
import CartItem from "./CartItem";
import "./DisplayProduct.css";

const DisplayProduct = () => {
  const [products] = useState(productsData ?? []);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");

  console.log("Parent Rendered");

  const handleAddToCart = useCallback(
    (id) => {
      const selectedProduct =
        products?.find((p) => p?.id === (id ?? "")) ?? null;

      if (!selectedProduct) return;

      setCart((prev = []) => [...prev, selectedProduct]);
    },
    [products],
  );

  return (
    <>
      <div className={`container ${theme ?? "light"}`}>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          Toggle Theme
        </button>

        <h3>Products</h3>

        {products?.map((product) => (
          <div key={product?.id ?? Math.random()} className="product-box">
            Name: {product?.name ?? "N/A"} <br />
            Price: {product?.price ?? "N/A"} <br />
            Category: {product?.category ?? "N/A"} <br />
            <button
              className="add-btn"
              onClick={() => handleAddToCart(product?.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}

        <CartItem cart={cart ?? []} />
      </div>
    </>
  );
};

export default DisplayProduct;
