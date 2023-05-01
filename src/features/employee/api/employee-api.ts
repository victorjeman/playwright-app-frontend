import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants/constants';
import { Employee, EmployeeMultiSelect } from 'features/employee/types/employee-types';
import { transformEmployeesForMultiselect } from 'features/employee/utils/transform-employees-for-multiselect';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',

  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
    getEmployees: builder.query<EmployeeMultiSelect[], void>({
      query: () => ({ url: 'employees' }),
      providesTags: ['Employees'],

      transformResponse: (data: Employee[]) => transformEmployeesForMultiselect(data),
    }),
  }),
});

export const { useGetEmployeesQuery } = employeeApi;
