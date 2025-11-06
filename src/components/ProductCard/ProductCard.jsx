
import './ProductCard.css';

function ProductCard({ hot, image, category, title, description, price, price_sold = undefined }) {

  let displayPrice = price;

  if (price_sold) {
    displayPrice = <><small>{price}</small>{price_sold}</>;
  }

  return (
    <div className="product-card">
      {(hot === true) && <div className="badge">Hot</div>}
      <div className="product-tumb">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4><a href="">{title}</a></h4>
        <p>{description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            {displayPrice}
          </div>
          <div className="product-links">
            <a href=""><i className="fa fa-heart"></i></a>
            <a href=""><i className="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;