import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from '../../mystyle.module.css';
//import { deleteInstructor } from "../../store/actions/actionCreators";

const AllInstructorsView = (props) => {

  if (!props.allInstructors.length) {
    return(
      <div>
      <div style={{position: "relative"}}>
          <Link to={`/`}>
            <span style={{color: "white",verticalAlign: "middle", margin: "20px", position: "absolute", left: 25}} class="material-symbols-outlined">home</span>
          </Link>
           <h1 className={styles.title}>Instructors</h1>
        </div>
        There are no instructors.
        <br/>
        <Link to={`/newinstructor`}>
          <button className={styles.buttonmain}>
          <span style={{verticalAlign: "middle", paddingRight: 5}}class="material-symbols-outlined">person_add</span>
            Add New Instructor</button>
        </Link>

    </div>);

  }

  return (
    <div>

    <div style={{position: "relative"}}>
        <Link to={`/`}>
          <span style={{color: "white",verticalAlign: "middle", margin: "20px", position: "absolute", left: 25}} class="material-symbols-outlined">home</span>
        </Link>
         <h1 className={styles.title}>Instructors</h1>
      </div>

      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div style={{position: "relative"}} key={instructor.id}>
            <Link to={`/instructor/${instructor.id}`}>
              <p className={styles.listitem}>{name}</p>
            </Link>
            <button onClick={() => props.deleteInstructor(instructor.id)} className={styles.buttondeladd}>
            <span style={{verticalAlign: "middle", fontSize: "17px"}} class="material-symbols-outlined">delete</span>
            </button>
            <p className={styles.dept}>{instructor.department}</p>

          </div>
        );

      })}

      <Link to={`/newinstructor`}>
        <button className={styles.buttonmain}>
        <span style={{verticalAlign: "middle", paddingRight: 5}}class="material-symbols-outlined">person_add</span>
          Add New Instructor</button>
      </Link>

    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
