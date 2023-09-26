// Components
import ProductDetail from "../components/ProductDetail";
import ProductImage from "../components/ProductImage";
import ProductFilter from "../components/ProductFilter";

// Router 
import { useParams } from "react-router-dom"

// Redux 
import { useSelector } from "react-redux" 


const ProductPage = () => {
  const {id} = useParams() 
  const products = useSelector((state) => state.products)
  const {category,price,name, color, image:img, sizes} = products.find((p) => p.id === +id)
  let colorClass = `bg-${color}-500` ;

if(color === "black" || color === "white") {
  colorClass = `bg-${color}`
}
  return (
    <div className="grid grid-cols-12 gap-10">
      <ProductDetail category={category} name={name} price={price} />
      <ProductImage img={img} />
      <ProductFilter color={colorClass} sizes={sizes} />
    </div>
  );
};

export default ProductPage;
