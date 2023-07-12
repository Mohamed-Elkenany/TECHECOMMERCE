import { createSlice } from "@reduxjs/toolkit";

const initialState = "Last Product"

const shareSlice = createSlice({
    name: "share",
    initialState,
    reducers: {
        UpdateState: (_, action) => {
            return action.payload;
        }
    }
});
export const { UpdateState } = shareSlice.actions;
export default shareSlice.reducer;