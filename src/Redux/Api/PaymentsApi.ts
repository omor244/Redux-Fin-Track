// Example: src/redux/features/api/baseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentsApi = createApi({
    reducerPath: 'paymentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fin-track-backend-five.vercel.app'
    }),
    tagTypes: ['Payments'], // Helps with auto-refreshing data later
    endpoints: (builder) => ({
        // Define the POST mutation here
        addPayment: builder.mutation({
            query: (paymentData) => ({
                url: '/payment',
                method: 'POST',
                body: paymentData,
            }),
            invalidatesTags: ['Payments'], // Refreshes any payment lists automatically
        }),
    }),
});

export const { useAddPaymentMutation } = paymentsApi;