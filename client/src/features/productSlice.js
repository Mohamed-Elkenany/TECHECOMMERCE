import { createSlice } from "@reduxjs/toolkit";

// appApi............................
import appApi from "../services/appApi";

const initialState = [];

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resatePro: () => initialState,
        updataProduct: (_, action) => {
            return action.payload.data;
        }
    },
});
export const { updataProduct, resatePro } = productSlice.actions;
export default productSlice.reducer;
