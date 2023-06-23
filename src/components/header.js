import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='flex gap-8 my-8 justify-center'>
          <Link to='/' className='text-blue-60 underline'>Home</Link>
          <Link to='/feedback' className='text-blue-60 underline'>Review</Link>
          <Link to='/feedbacks' className='text-blue-60 underline'>Feedbacks</Link>
        </div>
    </div>
  )
}

export default Header