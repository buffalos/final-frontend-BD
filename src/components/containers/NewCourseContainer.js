import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCourseView from '../views/NewCourseView';
import { addCourseThunk } from '../../store/thunks';
import { fetchAllInstructorsThunk } from '../../store/thunks';


class NewCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          location: "", 
          instructorId: null, 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    componentDidMount() {
      this.props.fetchInstructors();
      console.log("HIIIIIII");
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

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the course has not been created yet
        if(this.state.title===""){
          this.setState({error:"Title field is required"});
          return;
        }
        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId
        };
        
        let newCourse = await this.props.addCourse(course);

        this.setState({
          redirect: true, 
          redirectId: newCourse.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }
        return (
          <NewCourseView 
            instructors={this.props.allInstructors}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            handleSelectChange={this.handleSelectChange}
            error={this.state.error}      
          />
        );
    }
}

const mapState = (state) => {
  return {
    allInstructors: state.allInstructors
  };
};

const mapDispatch = (dispatch) => {
    return({
        addCourse: (course) => dispatch(addCourseThunk(course)),
        fetchInstructors: () => dispatch(fetchAllInstructorsThunk()),
    })
}

export default connect(mapState, mapDispatch)(NewCourseContainer);