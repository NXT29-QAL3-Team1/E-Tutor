import './StudentTeachers.css';
import teachersData from './teacherData';
import TeacherCard from '../../../components/teacherCard/TeacherCard';

function StudentTeachers() {
  return (
    <div id="teachers-page" className="page-content container">
      <section className="instructors-section">
        <h1 className="section-title">
          Instructors ({teachersData.length})
        </h1>

        <div className="instructors-grid">
          {teachersData.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              name={teacher.name}
              role={teacher.role}
              rating={teacher.rating}
              students={teacher.students}
              image={teacher.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudentTeachers;