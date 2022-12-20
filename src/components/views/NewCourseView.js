import styles from '../../mystyle.module.css';


const NewCourseView = (props) => {
  const {instructors, handleChange, handleSubmit, handleSelectChange, error } = props;
 //let allInstructors = this.props.fetchInstructors();

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 className={styles.subtitle}>
            New Course
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Timeslot: </label>
          <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Location: </label>
          <input type="text" name="location" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>
          <label> Instructor: </label>
          <select onChange={(e) => handleSelectChange(e)}>
              {instructors.map((instructor) => {
                let name = `${instructor.firstname} ${instructor.lastname}`;
                return (
                  <option key={instructor.id} value={instructor.id}>{name}</option>
                );
              })};
              {/* {console.log("this.state.instructorId: " + this.state.instructorId)}; */}
            </select>
            <br/>
          <button type="submit" className={styles.buttonmain}>
          <span style={{verticalAlign: "middle"}}class="material-symbols-outlined">check_small</span>
            Submit
          </button>
          <br/>
          <br/>
        </form>
        {error!=="" && <p>
                  <span style={{verticalAlign: "bottom", marginBottom: "2px"}}class="material-symbols-outlined">warning</span>
                  {" " + error}
                </p>}
        </div>
      </div>

  )
}

export default NewCourseView;
