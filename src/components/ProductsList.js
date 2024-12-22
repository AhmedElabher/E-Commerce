import { useEffect, useState } from "react";
import "../CSS/ProductsList.css";
import Products from "./Products";
import { Button } from "bootstrap";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const oneClickCategorie = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="gallery">
        <h3>Our Gallery</h3>
        <div className="cat-buttons">
          <button
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                className="cat-info"
                key={cat}
                onClick={() => {
                  oneClickCategorie(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cards-container">
        {products.map((product) => {
          return (
            <div className="card-container" key={product.id}>
              <Products product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductsList;
