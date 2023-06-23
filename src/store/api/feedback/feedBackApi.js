import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { getFeedbacks, saveFeedback } from './actions'

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fakeBaseQuery(),
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getFeedbacks: builder.query({
            queryFn: () => getFeedbacks(),
            providesTags: ['feedbacks'],
        }),
        saveFeedback: builder.mutation({
            queryFn: (feedback) => saveFeedback(feedback),
            invalidatesTags: ['feedback'],
        }),
    }),
})

export const { 
    useGetFeedbacksQuery,
    useSaveFeedbackMutation,
 } = feedbackApi