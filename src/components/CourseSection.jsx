import React from 'react'
import ProgressBar from './ProgressBar'
import CourseContent from './CourseContent'


export default function CourseSection() {
  return (
    <div className='course-section'>
        <ProgressBar/>
        <CourseContent/>
    </div>
  )
}
