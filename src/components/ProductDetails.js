import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Details from "./Details";
function ProductId() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div className="card-container">
      <Details product={product} showButton={false} />
    </div>
  );
}
export default ProductId;
