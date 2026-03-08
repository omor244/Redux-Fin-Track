
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tripsApi = createApi({
    reducerPath: "tripsApi",

    baseQuery: fetchBaseQuery({ baseUrl: "https://fin-track-backend-five.vercel.app" }),

    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "/trips"
        })
    })
})


export const { useGetTaskQuery } = tripsApi