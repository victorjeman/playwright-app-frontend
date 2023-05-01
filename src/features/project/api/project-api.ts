import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants/constants';
import { Project } from 'features/project/types/project-types';

export const projectApi = createApi({
  reducerPath: 'projectApi',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({ url: 'projects' }),

      providesTags: ['Projects'],
    }),

    getProjectById: builder.query<Project, number>({
      query: (id) => `projects/${id}`,
    }),

    createProject: builder.mutation({
      query: (project) => ({
        url: '/projects',
        method: 'POST',
        body: { ...project, technologies: ['React', 'Redux'], employees: ['John', 'Jane'] },
      }),
      invalidatesTags: ['Projects'],
    }),

    updateProject: builder.mutation({
      query: ({ id, project }) => ({
        url: `/projects/${id}`,
        method: 'put',
        body: project,
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
