import { Link } from "react-router-dom";

const CourseView = (props) => {
   let {course, handleClick} = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <Link to={`/instructor/${course.instructor.id}`}> {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>Staff</h3>} </Link>
      <Link to={`/editcourse/${course.id}`}>Edit course information</Link>

      <br/>
      <Link to={`/courses`}>View all courses</Link>
      <br/>
       <button onClick={(e) => this.handleClick(e)}>Delete</button>
    </div>
  );

};

export default CourseView;
//<Link to={`/instructor/${instructor.id}`}>
