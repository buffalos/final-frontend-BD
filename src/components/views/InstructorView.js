import { Link } from "react-router-dom";
import styles from '../../mystyle.module.css';


const InstructorView = (props) => {
  const {instructor, editCourse, allCourses, handleClick} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  //console.log("hi", assignedCourses)
  if (assignedCourses.length !== 0 ){
  return (
    <div>
      <h1>{instructor.firstname + " " + instructor.lastname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:

        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})} className={styles.button}>x</button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})} className={styles.button}>+</button>
            </div>
          );
        })}</div>

      </div>

      <Link to={`/editinstructor/${instructor.id}`}>Edit instructor information</Link>
      <br></br>
      <button onClick={(e) => handleClick(e)} className={styles.button}>Delete Instructor</button>
      </div>
  );
} else {
    return (
        <div>
          <h1>{instructor.firstname + " " + instructor.lastname}</h1>
          <h3>{instructor.department}</h3>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <div>Assigned courses:
                <br></br>
                No assigned courses.
            </div>
            <div>Available courses:
            {availableCourses.map( course => {
              return (
                <div key={course.id}>
                <Link to={`/course/${course.id}`}>
                  <h4>{course.title}</h4>
                </Link>
                <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})} className={styles.button}>+</button>
                </div>
              );
            })}</div>

          </div>

          <Link to={`/editinstructor/${instructor.id}`}>Edit instructor information</Link>
          <br></br>
          <button onClick={(e) => handleClick(e)} className={styles.button}>Delete Instructor</button>
        </div>
    );
  }
};

export default InstructorView;
