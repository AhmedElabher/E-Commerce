import { Link } from "react-router-dom";
import "../CSS/Details.css";
function Details(props) {
  const { product, showButton } = props;
  return (
    <>
      <div class="card-details">
        <div className="card-area">
          <h3>Product Details</h3>
          <img
            src={product.image}
            className="details-image"
            alt={product.title}
          />
          <div className="body-details">
            <h5 className="title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p>Price: {product.price}$</p>
            {showButton && (
              <Link className="btn" to={`/product/${product.id}`}>
                Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
