import { Link } from "react-router-dom";
import styles from '../../mystyle.module.css';
//import { Redirect } from 'react-router-dom';

const CourseView = (props) => {
  let { course, handleClick } = props;

  return (
    <div>
      <h1 className={styles.title}>{course.title}</h1>
       {course.instructor ? <Link to={`/instructor/${course.instructor.id}`}><h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3></Link>: <h3>Staff</h3>}
       <div className={styles.info}>
        {course.timeslot ?<h3>{course.timeslot}</h3> : <h3>Timeslot TBA</h3>}
        {course.location ?<h3>{"Room " + course.location}</h3> : <h3>Location TBA</h3>}
      </div>
      <Link to={`/editcourse/${course.id}`}>
      <button className={styles.buttonmain}>
      <span style={{verticalAlign: "middle", paddingRight: "5px", }}class="material-symbols-outlined">edit</span>
        Edit course information
        </button>
        </Link>

       <button onClick={(e) => handleClick(e)} style={{marginLeft: "7px"}} className={styles.button}>
       <span style={{verticalAlign: "middle", paddingRight: "5px", }}class="material-symbols-outlined">delete</span>
        Delete Course</button>

      <br/>
        <Link to={`/courses`}>
      <button className={styles.button}>
      <span class="material-symbols-outlined" style={{verticalAlign: "middle", paddingRight: "8px"}}> library_books </span>
      View all courses
        </button>
        </Link>

    </div>
  );
};

export default CourseView;
