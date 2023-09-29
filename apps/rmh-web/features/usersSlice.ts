import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { User } from "@/app/pt-portal/models";

// Define a type for the slice state
interface UserState {
  selectedUsers: User[];
}

// Define the initial state using that type
const initialState: UserState = {
  selectedUsers: [],
};

export const UserSlice = createSlice({
  name: "Users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUsers: (state, action: PayloadAction<User>) => {
      state.selectedUsers = [...state.selectedUsers, action.payload];
    },
  },
});

export const { setUsers } = UserSlice.actions;

//   export const selectIsAuthenticated = (state: RootState) => state.
// // Other code such as selectors can use the imported `RootState` type
// export const     setUsers: (state, action: PayloadAction<boolean>) => {
//     = (state: RootState) =>
//   state.auth.isAuthenticated;

export const selectUsers = (state: RootState) => state.users.selectedUsers;

export default UserSlice.reducer;
