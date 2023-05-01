import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Project } from 'features/project/types/project-types';

interface ProjectState {
  activeProject: Project | null;
  filters: string[];
}

const initialState: ProjectState = {
  activeProject: null,
  filters: [],
};

export const projectSlice = createSlice({
  name: 'projects',
  initialState,

  reducers: {
    setActiveProjectAction: (state, action: PayloadAction<Project | null>) => {
      state.activeProject = action.payload;
    },

    setProjectFilterAction: (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
  },
});

export const { setActiveProjectAction, setProjectFilterAction } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
