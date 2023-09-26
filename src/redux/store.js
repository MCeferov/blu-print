import { configureStore } from "@reduxjs/toolkit";

// Slices
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import productsSlice from "./slices/productsSlice";
import productSlice from "./slices/productSlice";
import sizeSlice from "./slices/sizeSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    color: colorSlice,
    products: productsSlice,
    size: sizeSlice,
    product: productSlice,
  },
});

export default store;
