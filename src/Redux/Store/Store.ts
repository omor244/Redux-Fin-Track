import { configureStore } from '@reduxjs/toolkit'
import { tripsApi } from '../Api/Trip'
import { paymentsApi } from '../Api/PaymentsApi'


export const store = configureStore({
    reducer: {
        // 2. Add the new reducer
        [tripsApi.reducerPath]: tripsApi.reducer,
        [paymentsApi.reducerPath]: paymentsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(tripsApi.middleware)
            .concat(paymentsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch