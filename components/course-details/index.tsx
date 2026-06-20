import React from 'react'
import DetailsMainHeader from './components/details-main-header'
import Content from './components/content'

const CourseDetailsWrapper = () => {
    return (
        <div className='content w-full bg-white'>
            <DetailsMainHeader />
            <div className="app-container pt-[20px] border-b border-gray-50">
                <Content />
            </div>
            <div className="app-container">
                <div>related courses</div>
            </div>
        </div>
    )
}

export default CourseDetailsWrapper
