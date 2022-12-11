import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchInstructorThunk, editInstructorThunk } from '../../store/thunks';


class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          department: "",
          instructorId: null,
          redirect: false,
          redirectId: null
        };
    }

    componentDidMount() {
        //getting instructor ID from url
        this.props.fetchInstructor(this.props.match.params.id);
        this.setState({
            firstname: this.props.instructor.firstname,
            lastname: this.props.instructor.lastname,
            department: this.props.instructor.department,
            instructorId: this.props.instructor.instructorId,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for instructor from form input
        let instructor = {
            id: this.props.instructor.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            instructorId: this.state.instructorId
        };

        this.props.editInstructor(instructor);

        this.setState({
          redirect: true,
          redirectId: this.props.instructor.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of the edited instructor
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="firstname" value={this.state.firstname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="lastname" value={this.state.lastname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="department" value={this.state.department} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input type="text" name="instructorId" value={this.state.instructorId} onChange={(e) => this.handleChange(e)} />
            <br/>

            <button type="submit">
              Submit
            </button>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      instructor: state.instructor,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
        fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditInstructorContainer);
