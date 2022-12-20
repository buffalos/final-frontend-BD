import styles from '../../mystyle.module.css';


const NewInstructorView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 className={styles.subtitle}>
            New Instructor
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Last Name: </label>
          <input type="text" name="lastname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Department: </label>
          <input type="text" name="department" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>InstructorId: </label>
          <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit" className={styles.button}>
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

export default NewInstructorView;
