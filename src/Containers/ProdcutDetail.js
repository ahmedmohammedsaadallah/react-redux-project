import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  selected_Product,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import "./productdetail.css";
const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const respone = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err: ", err));
    dispatch(selected_Product(respone.data));
  };
  useEffect(() => {
    if (productId && productId != "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const product = useSelector((state) => state.product);
  const { image, title, price, category } = product;
  return (
    <div className="single__product">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="price">$ {price}</div>
        <div className="meta">{category}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
