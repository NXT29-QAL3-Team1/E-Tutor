// React Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Main CSS File
import './index.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Roots
import MainRoot from './pages/roots/mainRoot/MainRoot';
import InstructorDashRoot from './pages/roots/instructorDashRoot/InstructorDashRoot';
import StudentDashRoot from './pages/roots/studentDashRoot/StudentDashRoot';
import AuthenticationRoot from './pages/roots/authRoot/AuthenticationRoot'

// Pages
import Home from './pages/mainPages/home/Home';
import Courses from './pages/mainPages/courses/Courses';
import CourseDetails from './pages/mainPages/courseDetails/CourseDetails';
import About from './pages/mainPages/about/About';
import Help from './pages/mainPages/help/Help';
import InstructorInfo from './pages/mainPages/instructorInfo/InstructorInfo';
import CourseContent from './pages/mainPages/courseContent/CourseContent';

// Pages (Student)
import StudentDashboard from './pages/studentPages/studentDashboard/StudentDashboard';
import StudentCourses from './pages/studentPages/studentCourses/StudentCourses';
import StudentTeachers from './pages/studentPages/studentTeachers/StudentTeachers';
import StudentWishlist from './pages/studentPages/studentWishlist/StudentWishlist';
import SettingsStudent from './pages/studentPages/studentSettings/SettingsStudent';
// Pages (Instructor)
import InstructorDashboard from './pages/instructorPages/instructorDashboard/InstructorDashboard';
import CreateCourse from './pages/instructorPages/createCourse/CreateCourse';
import InstructorCourses from './pages/instructorPages/instructorCourses/InstructorCourses';
import InstructorEarning from './pages/instructorPages/instructorEarning/InstructorEarning';
import InstructorSettings from './pages/instructorPages/instructorSettings/InstructorSettings';

// Pages (Config)
import ContentConfigPage from './pages/config/ContentConfigPage';

// Error Page
import Error from './pages/mainPages/error/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="courses/:id/content" element={<CourseContent />} />
        <Route path="instructorInfo/:id" element={<InstructorInfo />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="config" element={<ContentConfigPage />} />
        <Route path="studentDashboard" element={<StudentDashRoot />} >
          <Route index element={<StudentDashboard />} />
          <Route path="studentCourses" element={<StudentCourses />} />
          <Route path="studentTeachers" element={<StudentTeachers />} />
          <Route path="studentWishlist" element={<StudentWishlist />} />
          <Route path="settings" element={<SettingsStudent />} />
        </Route>
      </Route>


      <Route path="auth" element={<AuthenticationRoot />}>

      </Route>

      <Route path="instructorDashboard" element={<InstructorDashRoot />}>
        <Route index element={<InstructorDashboard />} />
        <Route path="createCourse" element={<CreateCourse />} />
        <Route path="instructorCourses" element={<InstructorCourses />} />
        <Route path="earning" element={<InstructorEarning />} />
        <Route path="instructorSettings" element={<InstructorSettings setProfileImage={undefined} />} />
      </Route>

      <Route path="*" element={<Error />} />

    </>
  )
)

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App