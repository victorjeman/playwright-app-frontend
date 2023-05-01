import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActiveUser, Role } from 'features/auth/types/auth-types';

interface AuthState {
  activeUser: ActiveUser | null;
  activeRole: Role | null;
}

const initialState: AuthState = {
  activeUser: null,
  activeRole: null,
};

// step 1 - Create a store and a specific feature for auth
export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setActiveUserAction: (state, action: PayloadAction<ActiveUser | null>) => {
      state.activeUser = action.payload;
    },

    setActiveRoleAction: (state, action: PayloadAction<Role | null>) => {
      state.activeRole = action.payload;
    },
  },
});

export const { setActiveUserAction, setActiveRoleAction } = authSlice.actions;
export const authReducer = authSlice.reducer;
