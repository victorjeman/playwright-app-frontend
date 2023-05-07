import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { type AxiosRequestConfig } from 'axios';

import { BASE_URL } from 'shared/constants/constants';

//@ts-ignore
const sleep = (ms) => new Promise((r) => window.setTimeout(r, ms));

export const fetchBaseQueryApi =
  (): BaseQueryFn<{
    url: string;
    data?: AxiosRequestConfig['data'];
    method: AxiosRequestConfig['method'];
    headers?: AxiosRequestConfig['headers'];
  }> =>
  async (param) => {
    const result = await axios({
      ...param,
      baseURL: BASE_URL,
    });

    // if (param.method === 'get') await sleep(5000);

    return { data: result.data };
  };
