import { createSlice } from "@reduxjs/toolkit";

// appApi............................
import appApi from "../services/appApi";

const initialState = [];

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updataProduct: (_, action) => {
            return action.payload.data;
        }
    },
});
export const { updataProduct } = productSlice.actions;
export default productSlice.reducer;
