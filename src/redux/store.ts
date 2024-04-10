import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const persistedReducer = rootReducer;

export const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
