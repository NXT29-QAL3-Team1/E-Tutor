import VideoPlayer from './VideoPlayer'
import Heading from './Heading'

export default function CourseContentDetails({ handleOpen }) {
  return (
    <div className="course-details">
      <VideoPlayer />
      <Heading handleOpen={handleOpen} />
    </div>
  );
}
