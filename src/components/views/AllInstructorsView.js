import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import { deleteInstructor } from "../../store/actions/actionCreators";
import styles from '../../mystyle.module.css';

const AllInstructorsView = (props) => {
  
  if (!props.allInstructors.length) {
    return(
      <div>
        <h6 className={styles.subtitle}>Instructors</h6>
        There are no instructors.
        <Link to={`/newinstructor`}>
          <button className={styles.button}>
          <span style={{verticalAlign: "bottom", paddingRight: 5}}class="material-symbols-outlined">person_add</span>
            Add New Instructor</button>
        </Link>

    </div>);
      
  }

  return (
    <div>
      <h6 className={styles.subtitle}>Instructors</h6>      
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div style={{position: "relative"}} key={instructor.id}>
            <Link to={`/instructor/${instructor.id}`}>
              {/* <span style={{marginRight: 10}}>{name}</span> */}
              <p className={styles.listitem}>{name}</p>
            </Link>
            {/* <button onClick={() => props.deleteInstructor(instructor.id)} className={styles.button}> */}
            <button onClick={() => props.deleteInstructor(instructor.id)} className={styles.buttondeladd}>
            <span style={{verticalAlign: "middle", fontSize: "17px"}} class="material-symbols-outlined">delete</span>
            </button>
            <p className={styles.info}>{instructor.department}</p>
          
          </div>




        );

      })}

      <Link to={`/newinstructor`}>
        <button className={styles.buttonmain}>
        <span style={{verticalAlign: "bottom", paddingRight: 5}}class="material-symbols-outlined">person_add</span>
          Add New Instructor</button>
      </Link>

    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
