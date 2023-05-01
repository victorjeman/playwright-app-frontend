import { configureStore } from '@reduxjs/toolkit';

import { projectReducer } from 'features/project/store/project-slice';
import { technologyReducer } from 'features/technology/store/technology-slice';
import { authReducer } from 'features/auth/store/auth-slice';

import { projectApi } from 'features/project/api/project-api';
import { technologyApi } from 'features/technology/api/technology-api';
import { employeeApi } from 'features/employee/api/employee-api';
import { authApi } from 'features/auth/api/auth-api';

// step 2 - update the root store
export const store = configureStore({
  reducer: {
    project: projectReducer,
    technology: technologyReducer,
    auth: authReducer,

    [projectApi.reducerPath]: projectApi.reducer,
    [technologyApi.reducerPath]: technologyApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectApi.middleware,
      technologyApi.middleware,
      employeeApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
