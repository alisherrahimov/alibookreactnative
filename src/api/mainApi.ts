import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BASE_URL} from '../utils/constants';
import {getItem} from '../utils/storage';

export const api = createApi({
  reducerPath: 'main',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      const token = getItem('token');

      headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['main'],
});
