import React, { Component } from 'react';
import axios from "axios"

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            empId: '',
            addData: []
        };
    }

    onFirstChange(e) {
        this.setState({ firstName: e.target.value })
    }

    onLastChange(e) {
        this.setState({ lastName: e.target.value })
    }

    onEmpId(e) {
        this.setState({ empId: e.target.value })
    }

    cancelCourse() {
        this.setState({
            firstName: '',
            lastName: '',
            empId: ''
        })
    }

    onAddUser(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            employeeId: this.state.empId
        }
        axios.post("http://localhost:9091/projectmanager/user/saveUsers", user)
            .then(res => {
                 this.setState({ addData: res.data });
            });
    }

    render() {
        return (
            <div className='container-fluid'>
                <form className='form-group' id="userForm" onSubmit={this.onAddUser.bind(this)}>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>First Name :</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' className="form-control" name='firstName' value={this.state.firstName}
                                onChange={this.onFirstChange.bind(this)} />
                        </div>
                        <div className='col-md-2'></div>
                    </div><br />
                    <div></div>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>Last Name :</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' className="form-control" name='lastName' value={this.state.lastName}
                                onChange={this.onLastChange.bind(this)} />
                        </div>
                        <div className='col-md-2'></div>
                    </div><br />
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>Employee ID :</label>
                        </div>
                        <div className='col-md-3'>
                            <input type='text' className="form-control" name='lastName' value={this.state.empId}
                                onChange={this.onEmpId.bind(this)} />
                        </div>
                        <div className='col-md-4'></div>
                    </div><br />
                    <div className='row'>
                        <div className='col-md-8'></div>
                        <div className='col-md-4'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <button type='submit' className='btn btn-secondary'>Add</button>
                                </div>
                                <div className='col-md-4'>
                                    <button type='button' className='btn btn-secondary' onClick={this.cancelCourse.bind(this)} value="Reset">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </form>
            </div>
        )
    }

}


export default AddUser;