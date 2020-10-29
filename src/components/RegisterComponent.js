import React, {Component} from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component{


    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render(){
        return(
            <div>
                <div className="text-center">
                    <h1>Registration Form</h1>
                    <p>Guidance to shape your future</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Full Name"/>

                    <label>Email</label>
                    <input type="text" placeholder="Email Id"/>

                    <label>Create Password</label>
                    <input type="password" placeholder="New Password"/>

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"/>

                    <label>Name</label>
                    <input type="text" placeholder="Enter Full Name"/>


                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Register;