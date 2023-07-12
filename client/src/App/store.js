import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import userSlice from "../features/userSlice";
import appApi from "../services/appApi";


import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import shareSlice from "../features/shareSlice";

const reducer = combineReducers({
    shareCate:shareSlice,
    user: userSlice,
    product: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});
const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "products"],
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});
export default store;