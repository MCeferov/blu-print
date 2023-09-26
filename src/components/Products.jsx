
// Components
import Product from "./Product";

// Redux
import { useSelector } from "react-redux";

const Products = () => {
  const productsData = useSelector((state) => state.products)
  return (
    <div className="col-span-9">
      <div className="mb-4">
        <h1 className="font-medium">Showing 2 results</h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
       {productsData.map((product) => (
        <Product 
        key={product.id}
        id={product.id}
        category={product.category}
        price={product.price}
        title={product.name}
        img={product.image}
        sizes={product.sizes}
        />
       ))}
      </div>
    </div>
  );
};

export default Products;
