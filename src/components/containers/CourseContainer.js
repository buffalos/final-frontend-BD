import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk, deleteCourseThunk } from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
  }

  render() {
    return (
      <CourseView
        course={this.props.course}
        deleteCourse={this.props.deleteCourse}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
    deleteCourse: (courseId) => dispatch(deleteCourseThunk(courseId)),
  };
};

export default connect(mapState, mapDispatch)(CourseContainer);
