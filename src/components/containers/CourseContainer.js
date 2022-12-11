import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk, deleteCourseThunk } from "../../store/thunks";
import { Redirect } from 'react-router-dom';
import { CourseView } from "../views";

class CourseContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        r: false,
      }
    }
    componentDidMount() {
    //getting course ID from url
        this.props.fetchCourse(this.props.match.params.id);
        console.log("this.props = " + this.props);
        console.log("this.props.match.params.id = " + this.props.match.params.id);
    }

    handleClick = async event => {
      event.preventDefault();

      await this.props.deleteCourse(this.props.match.params.id);
      //this.props.r = true;

      this.setState({
          r: true
      });
      console.log("state: " + this.state.r);
  }

  componentWillUnmount() {
      this.setState({r: false});
  }

  render() {
      if(this.state.r){
          return(<Redirect to={`/courses`}/>)
      }
    return (
      <CourseView
        course={this.props.course}
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
