import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const PERMIT_ALL_REDUCER = 'permitAll';
export const ADMIN_REDUCER = 'admin';

const API_URL_PERMIT_ALL = 'https://bvbinhdinh.ipacs.com.vn/api/ws/rest/v1/hospital/52203/';
const API_URL_SECURED = 'https://bvbinhdinh.ipacs.com.vn/api/ws/rest/v1/hospital/52203/';

export const securedApi = createApi({
  reducerPath: ADMIN_REDUCER,
  refetchOnMountOrArgChange: 10,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL_SECURED }),
  // tagTypes: Object.values(RESOURCES),
  endpoints: () => ({
    // api for each resource will be populated by /features
    // global api endpoints goes here
  }),
});

export const permitAllApi = createApi({
    reducerPath: PERMIT_ALL_REDUCER,
    baseQuery: fetchBaseQuery({ baseUrl: API_URL_PERMIT_ALL }),
    endpoints: (builder) => ({
      // api for each resource will be populated by /features
      // global api endpoints goes here
      mockApi: builder.query({
        // do nothing
        query: () => ({
          url: '',
          method: undefined,
        }),
      }),
    }),
  });