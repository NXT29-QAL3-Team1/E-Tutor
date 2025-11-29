import React, { useState } from 'react'

import { createContext } from 'react'

export const coursesContext = createContext({});

export default function CourseProvider({ children }) {

    const [courses, setCourses] = useState([
        {
            "_id": "6929686ea5b8c388582e1e93",
            "title": "React",
            "subtitle": "React Complete crash course ",
            "category": "web development",
            "price": "20",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764321365/courses/vst6ktkygdqug5lzqlfm.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764321389/courses/kxddsoabcz1blzgppdjh.mp4",
            "details": "In this course, you will learn React from the basics to advanced concepts, enabling you to create dynamic and high-performance web interfaces. You’ll gain practical skills to become a professional React developer, covering:\n\nCore Concepts: JSX, Components, Props, and State.\n\nEvent Handling: How to handle clicks, inputs, and forms.\n\nWorking with Data: Fetching data from APIs using Fetch or Axios.\n\nState Management: Using Context API and Hooks like useState and useEffect.\n\nReact Router: Creating multiple pages and navigating between them easily.\n\nAdvanced Practices: Component Lifecycle, performance optimization, and code reuse.\n\nHands-on Project: Build a real-world application to showcase your skills.\n\nThis course is perfect for beginners who want to start their journey in web development and for developers looking to enhance their React skills with practical, real-world projects.",
            "for": "Beginners",
            "requirement": "HTML CSS JS",
            "createdAt": "2025-11-28T09:16:30.161Z",
            "updatedAt": "2025-11-28T09:16:30.161Z",
            "__v": 0
        },
        {
            "_id": "69296ec6a5010cb66157e71a",
            "title": "AngularJS Fundamentals",
            "subtitle": "Build Dynamic Web Applications with AngularJS",
            "category": "Front-End Development",
            "price": "19",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764323000/courses/eglephfz17q0xtgqlt4t.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764323011/courses/l3rcbwbsbbmvxhpzdjtr.mp4",
            "details": "Learn how to create dynamic, single-page web applications using AngularJS. This course covers the basics of AngularJS, including data binding, controllers, directives, services, and routing, enabling you to build responsive and interactive web apps",
            "for": "Beginners who want to learn front-end development",
            "requirement": "Basic knowledge of HTML, CSS, and JavaScript",
            "createdAt": "2025-11-28T09:43:34.185Z",
            "updatedAt": "2025-11-28T09:43:34.185Z",
            "__v": 0
        },
        {
            "_id": "69296f55a5010cb66157e71e",
            "title": "Vue.js Essential",
            "subtitle": "Build Interactive Web Applications with Vue.js",
            "category": "Web Development",
            "price": "19",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764323149/courses/q4451vyktlqvw10p1wzv.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764323155/courses/cpvaw4njg046bbnkj1sd.mp4",
            "details": "Master the basics of Vue.js, a progressive JavaScript framework for building dynamic and reactive web applications. This course covers components, directives, data binding, Vue Router, and state management, giving you the skills to create modern, responsive user interfaces",
            "for": "Web developers looking to learn a modern JavaScript framework",
            "requirement": "Basic knowledge of HTML, CSS, and JavaScript",
            "createdAt": "2025-11-28T09:45:57.792Z",
            "updatedAt": "2025-11-28T09:45:57.792Z",
            "__v": 0
        },
        {
            "_id": "69296faea5010cb66157e726",
            "title": "Node.js Fundamentals",
            "subtitle": "Build Scalable Backend Applications with Node.js",
            "category": "Back-End Development",
            "price": "30",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764323239/courses/cajr85eakzh1pqfsi7gr.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764323244/courses/nyvsf4kkiptbdojmeizh.mp4",
            "details": "Learn how to build fast and scalable server-side applications using Node.js. This course covers Node.js core modules, asynchronous programming, Express.js, RESTful APIs, and working with databases, empowering you to create powerful backend solutions",
            "for": "Beginners who want to become backend developers",
            "requirement": "Basic knowledge of JavaScript",
            "createdAt": "2025-11-28T09:47:26.377Z",
            "updatedAt": "2025-11-28T09:47:26.377Z",
            "__v": 0
        },
        {
            "_id": "69297024a5010cb66157e72c",
            "title": "HTML Basics",
            "subtitle": "Learn the Building Blocks of the Web",
            "category": "Web Development",
            "price": "9",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764323354/courses/ocspsj4vvzjukbrgripe.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764323361/courses/b9dllstpjmx8wo9kfglm.mp4",
            "details": "Learn the fundamentals of HTML, the core language of the web. This course covers HTML elements, attributes, forms, tables, semantic tags, and best practices, giving you the foundation to build structured and accessible web pages",
            "for": "Absolute beginners who want to start web development",
            "requirement": "No prior coding experience required",
            "createdAt": "2025-11-28T09:49:24.242Z",
            "updatedAt": "2025-11-28T09:49:24.242Z",
            "__v": 0
        },
        {
            "_id": "6929708ea5010cb66157e730",
            "title": "CSS Fundamentals",
            "subtitle": "Style and Design Modern Web Pages",
            "category": "Web Development",
            "price": "11",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764323456/courses/i6on3vw2tfkodmcpq6zy.png",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764323468/courses/j2d6imwow0vcktiqictl.mp4",
            "details": "Learn how to style and layout web pages using CSS. This course covers selectors, properties, box model, flexbox, grid, responsive design, and best practices, enabling you to create visually appealing and user-friendly websites",
            "for": "Beginners who want to learn web design",
            "requirement": "Basic knowledge of HTML",
            "createdAt": "2025-11-28T09:51:10.894Z",
            "updatedAt": "2025-11-28T09:51:10.894Z",
            "__v": 0
        },
        {
            "_id": "6929b047b9904752c9f1c716",
            "title": "Cloudinary",
            "subtitle": "the ultimate Cloudinary course",
            "category": "Back-end",
            "price": "99",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764339771/courses/zajgtkoyrqzklqtrvz4h.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764339782/courses/ie1goxtxujcxssxmtmeo.mp4",
            "details": "welcome to the Cloudinary course where you learn everything you need to know !",
            "for": "beginners",
            "requirement": "html css js react",
            "createdAt": "2025-11-28T14:23:03.520Z",
            "updatedAt": "2025-11-28T14:23:03.520Z",
            "__v": 0
        },
        {
            "_id": "6929ba01b9904752c9f1c776",
            "title": "React",
            "subtitle": "React ultimate course",
            "category": "Front-End",
            "price": "65",
            "thumbnail": "https://res.cloudinary.com/dfsfskczr/image/upload/v1764342254/courses/khea4vtp6guqdckt2cuh.jpg",
            "trailer": "https://res.cloudinary.com/dfsfskczr/video/upload/v1764342271/courses/gacx6yip766g5gizyfz7.mp4",
            "details": "welcome to the ultimate react course",
            "for": "beginners",
            "requirement": "HTML CSS JS",
            "createdAt": "2025-11-28T15:04:33.159Z",
            "updatedAt": "2025-11-28T15:04:33.159Z",
            "__v": 0
        }
    ])

    return (
        <coursesContext.Provider value={{ courses, setCourses }}>
            {children}
        </coursesContext.Provider >
    )
}
