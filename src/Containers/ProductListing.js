import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import "./productlisting.css";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const reponse = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(reponse.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products: ", products);
  return (
    <div className="shop__productsContainer">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
