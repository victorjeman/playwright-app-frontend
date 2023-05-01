import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants/constants';
import { NewRole, Permission, Role, User } from 'features/auth/types/auth-types';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({ url: 'users' }),
      providesTags: ['Users'],
    }),

    getUserById: builder.query<User, number>({
      query: (id) => ({ url: `users/${id}` }),
      providesTags: ['Users'],
    }),

    updateUser: builder.mutation({
      query: (user: User) => ({
        url: `/users/${user.id}`,
        method: 'put',
        body: user,
      }),

      invalidatesTags: ['Users'],
    }),

    getRoles: builder.query<Role[], void>({
      query: () => ({ url: 'roles' }),
      providesTags: ['Roles'],
    }),

    getRoleById: builder.query<Role, number>({
      query: (id) => ({ url: `roles/${id}` }),
      providesTags: ['Roles'],
    }),

    createRole: builder.mutation({
      query: (role: NewRole) => ({
        url: '/roles',
        method: 'POST',
        body: role,
      }),
      invalidatesTags: ['Roles'],
    }),

    updateRole: builder.mutation({
      query: (role: Role) => ({
        url: `/roles/${role.id}`,
        method: 'put',
        body: role,
      }),

      invalidatesTags: ['Roles'],
    }),

    deleteRole: builder.mutation({
      query: (id) => ({
        url: `/roles/${id}`,
        method: 'delete',
      }),

      invalidatesTags: ['Roles'],
    }),

    getPermissions: builder.query<Permission[], void>({
      query: () => ({ url: 'permissions' }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useGetRolesQuery,
  useLazyGetRoleByIdQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetPermissionsQuery,
} = authApi;
