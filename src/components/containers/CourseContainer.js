import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk, deleteCourseThunk } from "../../store/thunks";
import { CourseView } from "../views";
import { Redirect } from 'react-router-dom';

class CourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          redirect: false,
          redirectId: null
      };
  }
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);

  }

  handleClick = async event => {
      event.preventDefault();
      let courseid = this.props.course.id;
      //get new info for course from form input
      this.props.deleteCourse(courseid);

      this.setState({
        redirect: true,
        redirectId: this.props.course.id
      });
  }

  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  render() {
     if(this.state.redirect) {
        return (<Redirect to={`/courses`}/>)
    }
    return (
      <CourseView
        course={this.props.course}
        deleteCourse={this.props.deleteCourse}
        handleClick={this.handleClick}
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
