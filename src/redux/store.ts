import { combineReducers, configureStore } from "@reduxjs/toolkit";
import vendorsReducer from "@/redux/vendors-slice"
const rootReducer = combineReducers({
  vendors: vendorsReducer,
});

const persistedReducer = rootReducer;

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
