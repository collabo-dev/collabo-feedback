import React from 'react'
import ReviewPage from './views/review/ReviewPage'
import FeedbackPage from './views/feedback/FeedbackPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './views/home/home'

const App = () => {
  return (
    <div className='container mx-auto p-4'>
        <h1 className='bg-orange-500 text-white p-4 rounded-lg text-6xl font-semibold w-full text-center my-4'>COLLABO FEEDBACK APP</h1>
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feedbacks' element={<FeedbackPage />} />
                <Route path='feedback' element={<ReviewPage/>} />
                <Route path='*' element={<ReviewPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App