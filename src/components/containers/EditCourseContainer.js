import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchCourseThunk, editCourseThunk } from '../../store/thunks';
import styles from '../../mystyle.module.css';


class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          instructorId: null, 
          location: "",
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting course ID from url
        this.props.fetchCourse(this.props.match.params.id);
        this.setState({
            title: this.props.course.title, 
            timeslot: this.props.course.timeslot,
            location: this.props.course.location, 
            instructorId: this.props.course.instructorId, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.title===""){
          this.setState({error:"Title field is required"});
          return;
        }

        //get new info for course from form input
        let course = {
            id: this.props.course.id,
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId
        };
        
        this.props.editCourse(course);

        this.setState({
          redirect: true, 
          redirectId: this.props.course.id,
          error: ""
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of the edited course
        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }

        return (
          <div>
          <h2 className={styles.subtitle}>
            Edit Instructor
          </h2>
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="title" value={this.state.title} onChange ={(e) => this.handleChange(e)}/>
            <br/>
            <br/>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="timeslot" value={this.state.timeslot} onChange={(e) => this.handleChange(e)}/>
            <br/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Location: </label>
            <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input style= {{fontFamily: "Signika", borderRadius: "5px", borderColor: "pink"}} type="text" name="instructorId" value={this.state.instructorId} onChange={(e) => this.handleChange(e)} />
            <br/>
            <br/>

  
            <button type="submit" className={styles.button} >
              <span style={{verticalAlign: "middle"}}class="material-symbols-outlined">check_small</span>
              Submit
            </button>
            {this.state.error!=="" && <p>{this.state.error}</p>}
          </form>
          </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      course: state.course,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
        fetchCourse: (id) => dispatch(fetchCourseThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditCourseContainer);