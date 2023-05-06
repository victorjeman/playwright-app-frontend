import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

import { Project } from 'features/project/types/project-types';
import { fetchBaseQueryApi } from 'shared/api/fetch-base-query-api';

export const projectApi = createApi({
  reducerPath: 'projectApi',

  baseQuery: fetchBaseQueryApi(),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({ url: 'projects', method: 'get' }),

      providesTags: ['Projects'],
    }),

    createProject: builder.mutation({
      query: (project) => ({
        url: '/projects',
        method: 'post',
        data: project,
      }),
      invalidatesTags: ['Projects'],
    }),

    updateProject: builder.mutation({
      query: ({ id, project }) => ({
        url: `/projects/${id}`,
        method: 'put',
        data: project,
      }),

      invalidatesTags: ['Projects'],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'delete',
      }),

      invalidatesTags: ['Projects'],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
