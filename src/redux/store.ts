import { configureStore, combineReducers, PreloadedState } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authReducer } from "./authSlice"; // Assuming AUTH_REDUCER constant is used correctly elsewhere
import { loginApi } from '../loginTest'; // Adjust the import path as needed
import { permitAllApi, securedApi } from "../api/api";

// Combine reducers correctly
const rootReducer = combineReducers({
    auth: authReducer,  // Using more typical key names
    [loginApi.reducerPath]: loginApi.reducer,
    [permitAllApi.reducerPath]: permitAllApi.reducer,
    [securedApi.reducerPath]: securedApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => 
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(
                    loginApi.middleware,
                    permitAllApi.middleware,
                    securedApi.middleware,
                ),
        preloadedState,
    });

export const store = setupStore({});

export type RootState = ReturnType<typeof rootReducer>; // Type derived from rootReducer
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

// If you are using RTK Query's automatic invalidation and refetching features
setupListeners(store.dispatch);
