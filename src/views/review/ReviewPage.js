import React from 'react'
import { checkEmail } from '../../helpers'
import { useSaveFeedbackMutation } from '../../store/api/feedback/feedBackApi'

const ReviewPage = () => {

    const [saveFeedback, { isLoading, isSuccess, isError }] = useSaveFeedbackMutation()

    const handleSumbit = (e) => {
        e.preventDefault()

        const { email, feedback, subject } = e.target.elements

        if (!checkEmail(email.value.trim())) return alert('Please enter a valid email');
        if (feedback.value.trim() === '') return alert('Please enter a valid feedback');
        if (subject.value.trim() === '') return alert('Please enter a valid feedback');

        const feddbackData = {
            email: email.value.trim(),
            message: feedback.value.trim(),
            subject: subject.value.trim()
        }
        saveFeedback(feddbackData).then(res => {
            if (res.error) return alert(res.error.message)
            if (res.data) {
                alert('Feedback saved successfully')

                email.value = ''
                feedback.value = ''
            }
        })
    }

    if (isLoading) return <div className='grid place-items-center h-screen'>Loading...</div>

    if (isSuccess) return <div className='grid place-items-center h-screen'>Feedback sent successfully</div>

    return (
        <form className='grid place-items-center gap-4 p-8 rounded-2xl' onSubmit={handleSumbit}>
            <div className="bg-slate-50 sm:min-w-[50%] min-w-full sm:p-8 p-4">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-full">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                        <div className="mt-2 w-full">
                            <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input required type="text" name="subject" id="subject" autoComplete="SUBJECT"
                                    className="w-full h-10 px-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Enter a subject" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-full">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2 w-full">
                            <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input required type="email" name="email" id="email" autoComplete="email"
                                    className="w-full h-10 px-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="me@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Feedback</label>
                        <div className="mt-2">
                            <textarea required id="feedback" name="feedback" rows={3} className="block w-full min-h-[24vh] px-2 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                        </div>
                        {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write your feedback</p> */}
                    </div>
                </div>
                {
                    isError && <div className='bg-pink-200 rounded-lg text-red-800 text-center p-4 mt-8'>Error sending feedback...</div>
                }
                <div className='flex items-center justify-center my-8'>
                    <button className='bg-blue-500 w-1/3 hover:bg-blue-600 px-8 py-2 rounded text-white'>Send</button>
                </div>
            </div>

        </form>
    )
}

export default ReviewPage