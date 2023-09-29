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
      const exists = state.selectedUsers.find(
        (user) => user.patientName === action.payload.patientName
      );
      if (exists) {
        state.selectedUsers = state.selectedUsers.filter(
          (selectedUser) =>
            selectedUser.patientName !== action.payload.patientName
        );
        return;
      }

      state.selectedUsers = [...state.selectedUsers, action.payload];
    },
  },
});

export const { setUsers } = UserSlice.actions;

export const selectUsers = (state: RootState) => state.users.selectedUsers;
export const isSelected = (state: RootState) => (user: User) =>
  state.users.selectedUsers.find(
    (selectedUser) => selectedUser.patientName === user.patientName
  );

export default UserSlice.reducer;
