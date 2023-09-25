import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice";
import patientReducer from "@/features/patientSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
