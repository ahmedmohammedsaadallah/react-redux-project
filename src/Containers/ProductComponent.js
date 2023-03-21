import produce from "immer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productcomponent.css";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="shop__product" key={id}>
        <Link className="product__link" to={`/product/${id}`}>
          <div className="shop__card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
