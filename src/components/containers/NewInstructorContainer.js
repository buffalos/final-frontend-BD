import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          department: "",
          instructorId: null,
          redirect: false,
          redirectId: null,
          error: ""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the instructor has not been created yet
        if(this.state.firstname===""){
          this.setState({error:"First name is required"});
          return;
        }
        if(this.state.lastname===""){
          this.setState({error:"Last name is required"});
          return;
        }
        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            instructorId: this.state.instructorId
        };

        let newInstructor = await this.props.addInstructor(instructor);

        this.setState({
          redirect: true,
          redirectId: newInstructor.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of newly created instructor
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);
