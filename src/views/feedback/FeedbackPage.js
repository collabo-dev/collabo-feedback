import React from 'react'
import { useGetFeedbacksQuery } from '../../store/api/feedback/feedBackApi'

const FeedbackPage = () => {

    const { data, isLoading } = useGetFeedbacksQuery();

    if (isLoading) {
        return <div>Loading...</div>

    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-4'>Feedbacks</h1>
            <div className='grid grid-cols-3 gap-4'>
                {data && data.map((data) => (
                    <div key={data.id} className='border border-gray-300 rounded-lg p-4'>
                        <h2 className='text-lg font-semibold mb-2 uppercase'>{data.subject}</h2>
                        <p className='text-gray-400 mb-2 text-sm'>{data.email}</p>
                        <hr/>
                        <p className='text-gray-600 mt-8'>{new Date(data.createdAt).toLocaleDateString()}</p>
                        <p className='text-gray-600'>{data.message}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeedbackPage