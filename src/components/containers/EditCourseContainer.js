import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import { Link } from "react-router-dom";
import { fetchCourseThunk, editCourseThunk, fetchAllInstructorsThunk } from '../../store/thunks';
//import Select from 'react-select';

class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "",
          timeslot: "",
          instructorId: null,
          redirect: false,
          redirectId: null,
          error: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        //getting course ID from url
        this.props.fetchCourse(this.props.match.params.id);
        this.setState({
            title: this.props.course.title,
            timeslot: this.props.course.timeslot,
            instructorId: this.props.course.instructorId,
        });
        this.props.fetchAllInstructors();
        //console.log("YOOOO: " + this.props.dropdown);
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for course from form input
        if(this.state.title===""){
          this.setState({error:"Title field is required"});
          return;
        }

        let course = {
            id: this.props.course.id,
            title: this.state.title,
            timeslot: this.state.timeslot,
            instructorId: this.state.instructorId
        };
        console.log("this.state.instructorid: " + this.state.instructorId);
       /*} if(this.state. !== "" && !this.state.instructorId){
          //if there is a selected, but no id in form field
          this.setState({instructorId: this.state.value});
          console.log("HELLO : "+this.state.value);
        } 
        else if (this.state.instructorId !== "" && this.state.value !== ""){
          this.setState({error: "Please select only one form of instructor choice."});
          return;
        }*/
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
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input type="text" name="timeslot" value={this.state.timeslot} onChange={(e) => this.handleChange(e)}/>
            <br/>

            {/* <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input type="text" name="instructorId" value={this.state.instructorId} onChange={(e) => this.handleChange(e)} />
            <br/> */}
            <p>Available instructors: </p>
            <select value={this.state.instructorId} onChange={(e) => this.handleChange(e)}>
              {this.props.allInstructors.map((instructor) => {
                let name = `${instructor.firstname} ${instructor.lastname}`;
                return( 
                  <option key={instructor.id} value={instructor.id}>{name}</option>
                  
                );      
              })};
              {/* {console.log("this.state.instructorId: " + this.state.instructorId)}; */}
            </select>
            {/*{this.props.allInstructors.map((instructor) => {
              let name = instructor.firstname + " " + instructor.lastname;
              return (
                <select value={this.state.dropdown} onChange={(e) => this.handleChange(e)}>{
                  <option key={instructor.id} value={name}>{name}</option>
                }
                </select>
              );
              
            })}*/}
            <button type="submit">
              Submit
            </button>

            {this.state.error!=="" && <p>{this.state.error}</p>}

          </form>
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
        fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
    })
}

export default connect(mapState, mapDispatch)(EditCourseContainer);
