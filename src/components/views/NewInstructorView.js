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
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: '600'}}>First Name: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="firstname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style= {{color:'#11153e', fontWeight: '600'}}>Last Name: </label>
          <input style= {{fontFamily: "Signika",borderRadius: "5px", borderColor: "pink"}} type="text" name="lastname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style= {{color:'#11153e', fontWeight: '600'}}>Department: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="department" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: '600'}}>instructorId: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="instructorId" onChange={(e) => handleChange(e)} />
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
