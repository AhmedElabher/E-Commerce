import { Link } from "react-router-dom";

function Products(props) {
  const { product, showButton } = props;
  return (
    <>
      <div class="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p>Price: {product.price}$</p>
          {showButton && (
            <Link className="btn" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Products;
