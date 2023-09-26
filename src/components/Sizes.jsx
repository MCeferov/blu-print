// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";

// Redux
import { useDispatch,useSelector } from "react-redux";
import  {sizeActions}  from "../redux/slices/sizeSlice";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

// Fake Size Data
const sizeData = [
  {
  id:1, 
  title : "Extra Small",
  size : "xs"
},
  {
  id:2, 
  title : "Small",
  size : "s"
},
  {
  id:3, 
  title : "Medium",
  size : "m"
},
  {
  id:4, 
  title : "Large",
  size : "l"
},
  {
  id:5, 
  title : "Extra Large",
  size : "xl"
}
]

const Sizes = () => {
  const [showSize, setShowSize] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(state => state.size)

  const setSize = (size) => {
    dispatch(sizeActions.addSize(size))
    console.log(size);
  }

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  return (
    <div>
      <button onClick={toggleSize} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron
            className={`${styles.icon} ${!showSize && "rotate-180"}`}
            color="black"
          />
        </div>
      </button>
      {showSize && (
        <ul className={styles.ul}> 
          {sizeData.map(size => (
          <Size click={() => {setSize(size.title)}}
           key={size.id}
           title={size.title}
           selected={state.includes(size.title)}
            >{size.size}</Size>))}
        </ul>
      )}
    </div>
  );
};

export default Sizes;