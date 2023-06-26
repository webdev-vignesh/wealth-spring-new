import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import dataSlice from "./dataSlice";
import basketSlice from "./basketSlice";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
    auth: authSlice,
    user: userSlice,
    data: dataSlice,
    basket: basketSlice,
});

const persistConfig = {
    key: 'root',
    whitelist: ['auth', 'data', 'basket'],
    storage,
}



const persistedReducer = persistReducer(persistConfig, reducers);

const   store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)

export default store;
