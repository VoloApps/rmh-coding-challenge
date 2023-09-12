import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"

// Define a type for the slice state
interface AuthState {
  isAuthenticated: boolean;
  preAuthenticatedRoute: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
  preAuthenticatedRoute: ''
}

export const AuthSlice = createSlice({
  name: "Auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setPreAuthenticatedRoute: (state, action: PayloadAction<string>) => {
      state.preAuthenticatedRoute = action.payload
    }
  },
})

export const {
  setIsAuthenticated,
  setPreAuthenticatedRoute
} = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsAuthenticated = (state: RootState) => state?.auth?.isAuthenticated;

export const selectPreAuthenticatedRoute = (state: RootState) => state?.auth?.preAuthenticatedRoute;

export default AuthSlice.reducer
