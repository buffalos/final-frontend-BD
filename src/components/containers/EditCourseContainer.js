import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchCourseThunk, editCourseThunk, fetchAllInstructorsThunk } from '../../store/thunks';
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
        this.props.fetchInstructors();
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

    handleSelectChange = event => {
      if (event.target.value === "staff"){
        this.setState({instructorId: null});
      }
      else{
        this.setState({instructorId: event.target.value});
      }

    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.title===""){
          this.setState({error:"Title field is required"});
          return;
        }

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

        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }

        return (
          <div>
          <h2 className={styles.subtitle}>
            Edit Course
          </h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <label> Title: </label>
            <input type="text" name="title" value={this.state.title} onChange ={(e) => this.handleChange(e)}/>
            <br/>
            <br/>
            <label> Timeslot: </label>
            <input type="text" name="timeslot" value={this.state.timeslot} onChange={(e) => this.handleChange(e)}/>
            <br/>
            <br/>

            <label> Location: </label>
            <input type="text" name="location" value={this.state.location} onChange={(e) => this.handleChange(e)} />
            <br/>
            <br/>
            <label> Instructor: </label>
            <select value={this.state.instructorId} onChange={(e) => this.handleSelectChange(e)}>
              if(course.instructor == null){
                <option value="staff">Staff</option>
              }
              {this.props.allInstructors.map((instructor) => {
                let name = `${instructor.firstname} ${instructor.lastname}`;
                return (
                  <option key={instructor.id} value={instructor.id}>{name}</option>
                );
              })};

            </select>
            <br/>

            <button type="submit" className={styles.buttonmain} >
              <span style={{verticalAlign: "middle"}} class="material-symbols-outlined">check_small</span>
              Submit
            </button>

          </form>
          {this.state.error!=="" && <p>{this.state.error}</p>}
          </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      course: state.course,
      allInstructors: state.allInstructors
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
        fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
        fetchInstructors: () => dispatch(fetchAllInstructorsThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditCourseContainer);
