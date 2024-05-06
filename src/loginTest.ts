import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const LOGIN_API = "loginapi";
const BASE_URL = "https://bvbinhdinh.ipacs.com.vn/api/ws/rest/v1/hospital/52203";

export const loginApi = createApi({
    reducerPath: LOGIN_API,
    baseQuery: fetchBaseQuery ({baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        // api for each resource will be populated by /features
        // global api endpoints goes here
        mockApi: builder.query({
            // do nothing
            query: () => `/login`,
        }),
    }),
});

export const {useMockApiQuery} = loginApi;