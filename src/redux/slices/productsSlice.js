import { createSlice  } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name : "products",
    initialState : [
        {
          id:1,
          category: "Caps",
          name: "Varsity cap",
          price: "13.99",
          image: "cap",
          color: "red",
          sizes: [
            {name:"xs", avaliable: true, },
            {name:"s", avaliable: true, },
            {name:"m", avaliable: false, },
            {name:"l", avaliable: true, },
            {name:"xl", avaliable: true, },
        ]
        },
        {
          id:2,
          category: "T-shirts",
          name: "T-shirt",
          price: "24.99",
          image: "t-shirt",
          color: "black",
          sizes: [
            {name:"xs", avaliable: false, },
            {name:"s", avaliable: true, },
            {name:"m", avaliable: false, },
            {name:"l", avaliable: true, },
            {name:"xl", avaliable: true, },
        ]
        }
      ],
    reducers : {}

});
 
export const productsActions = productsSlice.actions;

export default productsSlice.reducer;