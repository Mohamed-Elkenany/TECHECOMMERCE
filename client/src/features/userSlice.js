import { createSlice } from "@reduxjs/toolkit";

// appApi............................
import appApi from "../services/appApi";

const initialState = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: () => initialState,
        updateUser: (_, action) => {
            return action.payload.data;
        },
    },
    extraReducers: builder => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
    }
});
export const { logout, addNotification, restNotifications, updateUser } = userSlice.actions;
export default userSlice.reducer;
