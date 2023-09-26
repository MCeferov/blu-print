// Images
import TShirt from "../images/t-shirt.png";

const ProductImage = ({img}) => {
  return (
    <div className="col-span-5 border border-neutral-200 rounded-lg cursor-pointer">
      <img src={require(`../images/${img}.png`)} alt="t-shirt" className="w-full" />
    </div>
  );
};

export default ProductImage;
