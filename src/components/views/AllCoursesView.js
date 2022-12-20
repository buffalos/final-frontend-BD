import { Link } from "react-router-dom";
import styles from '../../mystyle.module.css';

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
    <div style={{position: "relative"}}>
        <Link to={`/`}>
          <span style={{color: "white",verticalAlign: "middle", margin: "20px", position: "absolute", left: 25}} class="material-symbols-outlined">home</span>
        </Link>
         <h1 className={styles.title}>Courses</h1>
      </div>

      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button className={styles.button}>
        <span style={{verticalAlign: "middle", paddingRight: "8px"}} class="material-symbols-outlined">library_add</span>
        Add New Course</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
    <div style={{position: "relative"}}>
        <Link to={`/`}>
          <span style={{color: "white",verticalAlign: "middle", margin: "20px", position: "absolute", left: 25}} class="material-symbols-outlined">home</span>
        </Link>
         <h1 className={styles.title}>Courses</h1>
      </div>

      {courses.map((course) => {
        let title = course.title;
        return (
          <div style={{position: "relative"}} key={course.id}>
          <Link to={`/course/${course.id}`}>
          <p className={styles.listitem}>{title}</p>
          </Link>
          <button onClick={() => deleteCourse(course.id)} className={styles.buttondeladd}>
            <span style={{verticalAlign: "middle", fontSize: "17px"}}class="material-symbols-outlined">delete</span>
          </button>
          </div>
        );
      }
    )}
      <Link to={`/newcourse`}>
        <button className={styles.buttonmain}>
        <span style={{verticalAlign: "middle", paddingRight: "8px"}} class="material-symbols-outlined">library_add</span>
          Add New Course</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;
