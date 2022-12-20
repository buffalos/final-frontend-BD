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
      <h1 className={styles.title}>{instructor.firstname + " " + instructor.lastname}</h1>
      <h3>{instructor.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:

        {assignedCourses.map( course => {
          return (
            <div style={{position: "relative"}}key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4 className={styles.listitem}>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})} className={styles.buttondeladd}><span style={{verticalAlign: "middle",fontSize: "17px"}}class="material-symbols-outlined">remove</span></button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div style={{position: "relative"}} key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4 className={styles.listitem}>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})} className={styles.buttondeladd}><span style={{verticalAlign: "middle",fontSize: "17px"}}class="material-symbols-outlined">add</span></button>
            </div>
          );
        })}</div>

      </div>

      <Link to={`/editinstructor/${instructor.id}`} style={{paddingRight: "7px"}}>
        <button className={styles.buttonmain}>
            <span style={{verticalAlign: "middle", paddingRight: "5px", fontSize: "23px"}}class="material-symbols-outlined">edit</span>
            Edit instructor information
        </button>
      </Link>
        <button onClick={(e) => handleClick(e)} className={styles.button}>
            <span style={{verticalAlign: "middle", paddingRight: "5px", fontSize: "23px"}}class="material-symbols-outlined">delete</span>
            Delete Instructor</button>
      <br/>
      <Link to={`/instructors`}>
        <button className={styles.button}>
            <span class="material-symbols-outlined" style={{verticalAlign: "middle", paddingRight: "8px"}}> groups </span>
            View all instructors
        </button>
      </Link>
      </div>
  );
} else {
    return (
        <div>
          <h1 className={styles.title}>{instructor.firstname + " " + instructor.lastname}</h1>
          <h3>{instructor.department}</h3>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <div>Assigned courses:
                <br></br>
                No assigned courses.
            </div>
            <div>Available courses:
            {availableCourses.map( course => {
              return (
                <div style={{position: "relative"}} key={course.id}>
                <Link to={`/course/${course.id}`}>
                  <h4 className={styles.listitem}>{course.title}</h4>
                </Link>
                <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})} className={styles.buttondeladd}><span style={{verticalAlign: "middle",fontSize: "17px"}}class="material-symbols-outlined">add</span></button>
                </div>
              );
            })}</div>

          </div>

          <Link to={`/editinstructor/${instructor.id}`} style={{paddingRight: "7px"}}>
            <button className={styles.buttonmain}>
                <span style={{verticalAlign: "middle", paddingRight: "5px", fontSize: "23px"}}class="material-symbols-outlined">edit</span>
                Edit instructor information
            </button>
          </Link>
           <button onClick={(e) => handleClick(e)} className={styles.button}>
                <span style={{verticalAlign: "middle", paddingRight: "5px", fontSize: "23px"}}class="material-symbols-outlined">delete</span>
                Delete Instructor</button>
          <br/>
          <Link to={`/instructors`}>
            <button className={styles.button}>
                <span class="material-symbols-outlined" style={{verticalAlign: "middle", paddingRight: "8px"}}> groups </span>
                View all instructors
            </button>
        </Link>
        </div>
    );
  }
};

export default InstructorView;
