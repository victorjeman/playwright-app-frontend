import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Technology } from 'features/technology/types/technology-types';

interface TechnologyState {
  activeTechnology: Technology | null;
  isCreateTechnologyFormVisible: boolean;
}

const initialState: TechnologyState = {
  activeTechnology: null,
  isCreateTechnologyFormVisible: false,
};

export const technologySlice = createSlice({
  name: 'technology',
  initialState,

  reducers: {
    setActiveTechnologyAction: (state, action: PayloadAction<Technology | null>) => {
      state.activeTechnology = action.payload;
    },

    setIsCreateTechnologyFormVisibleAction: (state, action: PayloadAction<boolean>) => {
      state.isCreateTechnologyFormVisible = action.payload;
    },
  },
});

export const { setActiveTechnologyAction, setIsCreateTechnologyFormVisibleAction } =
  technologySlice.actions;

export const technologyReducer = technologySlice.reducer;
