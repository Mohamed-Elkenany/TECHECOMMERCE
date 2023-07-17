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
        builder.addMatcher(appApi.endpoints.addToCart.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.increaseProductCart.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.increaseProductCartByAmount.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.decreaseProductCart.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.removeProductCart.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.addLike.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.removeLike.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.createOrder.matchFulfilled, (_, { payload }) => payload);
    }
});
export const { logout, addNotification, restNotifications, updateUser } = userSlice.actions;
export default userSlice.reducer;
