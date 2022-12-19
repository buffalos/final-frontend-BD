import styles from '../../mystyle.module.css';


const NewCourseView = (props) => {
  const {handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 className={styles.subtitle}>
            New Course
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: '600'}}>Title: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: '600'}}>Timeslot: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="timeslot" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: '600'}}>Location: </label>
          <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="location" onChange={(e) => handleChange(e)} />
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

export default NewCourseView;