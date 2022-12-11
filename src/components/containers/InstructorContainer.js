import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {
  fetchInstructorThunk,
  fetchAllCoursesThunk,
  editCourseThunk,
  deleteInstructorThunk
} from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        r: false,
      }
    }

  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchCourses();
  }

  componentWillUnmount() {
      this.setState({r: false});
  }

  handleClick = async event => {
    event.preventDefault();

    await this.props.deleteInstructor(this.props.match.params.id);
    //this.props.r = true;

    this.setState({
        r: true
    });
    console.log("state: " + this.state.r);
  }



  render() {
    if(this.state.r){
      return(<Redirect to={`/instructors`}/>)
    }
    return (
      <InstructorView
        instructor={this.props.instructor}
        editCourse={this.props.editCourse}
        allCourses={this.props.allCourses}
        handleClick={this.handleClick}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),

  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);
