import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants/constants';
import {
  Technology,
  TechnologyFormValues,
  TechnologyMultiSelect,
} from 'features/technology/types/technology-types';
import { transformTechnologiesForMultiselect } from 'features/technology/utils/transform-technologies-for-multiselect';

export const technologyApi = createApi({
  reducerPath: 'technologyApi',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getTechnologies: builder.query<Technology[], void>({
      query: () => ({ url: 'technologies' }),
      providesTags: ['Technologies'],
    }),

    getTechnologiesTransformed: builder.query<TechnologyMultiSelect[], void>({
      query: () => ({ url: 'technologies' }),
      providesTags: ['Technologies'],
      transformResponse: (data: Technology[]) => transformTechnologiesForMultiselect(data),
    }),

    createTechnology: builder.mutation({
      query: (technology: TechnologyFormValues) => ({
        url: '/technologies',
        method: 'POST',
        body: technology,
      }),
    }),

    updateTechnology: builder.mutation({
      query: (technology: Technology) => ({
        url: `/technologies/${technology.id}`,
        method: 'put',
        body: technology,
      }),

      invalidatesTags: ['Technologies'],
    }),

    deleteTechnology: builder.mutation({
      query: (id) => ({
        url: `/technologies/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['Technologies'],
    }),
  }),
});

export const {
  useGetTechnologiesQuery,
  useGetTechnologiesTransformedQuery,
  useCreateTechnologyMutation,
  useUpdateTechnologyMutation,
  useDeleteTechnologyMutation,
} = technologyApi;
