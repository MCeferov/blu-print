// Hooks
import { useState,useRef } from "react";

// Components
import Size from "./Size";
// Redux 
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../redux/slices/productSlice"
// Images
import Cart from "../images/cart.png";

const ProductFilter = ({color,sizes}) => {

  const dispatch = useDispatch()
  const {size,counter} = useSelector((state) => state.product)
  const inputRef = useRef() 
 
  const selectSize = (s) => {
  dispatch(productActions.selectSize(s))
  };

  const incrementCounter = () => {
    dispatch(productActions.increase())
  } 
  const decrementCounter = () => {
    dispatch(productActions.decrease())
  } 

  const setCounter = () => {
dispatch(productActions.setCounter(inputRef.current.value))
  }
    return (
    <div className="col-span-4">
      {/* Color */}
      <div className="mb-10">
        <h3 className="text-xs font-bold mb-3">Product color</h3>
        <div className={`h-8 w-8 ${color} rounded-full`}></div>
      </div>
      {/* Size */}
      <div className="mb-28">
        <h3 className="text-xs font-bold mb-3">Choose your size</h3>
        <ul className="flex flex-wrap gap-2">
        {sizes.map((s) => 
            <Size click={() => selectSize(s.name)} key={s.name} title={s.title} disabled={s.avaliable} selected={s.name === sizes}>
          {s.name}
           </Size>)
           }
        </ul> 
      </div>
      {/* Counter */}
      <div className="flex items-center gap-6 font-black mb-8">
        <button onClick={decrementCounter} className="text-3xl">-</button>
        <input
           onChange={setCounter}
           value={counter}
          ref={inputRef}
           type="number"
          min="1"
          max="100"
          className="border h-14 text-2xl text-center rounded-md"
        />
        <button onClick={incrementCounter} className="text-3xl">+</button>
      </div>
      {/* Add To Cart */}
      <button className="w-full  flex rounded-lg font-black uppercase duration-200 justify-between items-center bg-[#1d1d1d] hover:bg-[#0075ff] text-white text-xl px-8 py-6">
        Add To Cart
        <span>
          <img src={Cart} alt="cart" />
        </span>
      </button>
    </div>
  );
};

export default ProductFilter;
