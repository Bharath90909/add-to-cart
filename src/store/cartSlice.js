import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (action.payload.type === "UPDATE__QUANTITY") {
        const updatedItems = state.items
          .map((item, index) => {
            return index === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item;
          })
          .filter((item) => item.quantity > 0);
        state.items = updatedItems;
      } else {
        // let itemAtIndex;
        // for (let i = 0; i < state.items.length; i++) {
        //   if (state.items[i].id === action.payload.id) {
        //     itemAtIndex = i;
        //     break;
        //   }
        // }

        //OR

        const itemAtIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        if (itemAtIndex > -1) {
          // const prevQuantity = state.items[itemAtIndex].quantity;
          // state.items[itemAtIndex].quantity = prevQuantity+ 1;
          //OR
          state.items[itemAtIndex].quantity += 1;
        } else {
          state.items.push(action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
const { addItem, removeItem, clearCart } = cartSlice.actions;
export { addItem, removeItem, clearCart };

export default cartSlice.reducer;
