import React, { Component } from "react";
import axios from "axios";

export default class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee: {},
    };
    }
    
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:9000/employee/getEmployee/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            Employee: res.data.emp,
          });
      
        }
      });
  }
  render() {
    const {
      fname,
      lname,
      address,
      email,
      contactNumber,
      nic,
      gitUsername,
      university,
      batch,
      bank,
      bankAccount,
      bankBranch,
    } = this.state.Employee;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>Employee Details</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-3"> First name</dt>
          <dd className="col-sm-9">{fname}</dd>
          <dt className="col-sm-3"> Last Name</dt>
          <dd className="col-sm-9"> {lname}</dd>
          <dt className="col-sm-3"> Address</dt>
          <dd className="col-sm-9"> {address}</dd>
          <dt className="col-sm-3"> Email</dt>
          <dd className="col-sm-9"> {email}</dd>
          <dt className="col-sm-3"> Contact Number</dt>
          <dd className="col-sm-9"> {contactNumber}</dd>
          <dt className="col-sm-3"> NIC</dt>
          <dd className="col-sm-9"> {nic}</dd>
          <dt className="col-sm-3"> GIT User Name</dt>
          <dd className="col-sm-9"> {gitUsername}</dd>
          <dt className="col-sm-3"> university</dt>
          <dd className="col-sm-9"> {university}</dd>
          <dt className="col-sm-3"> Batch</dt>
          <dd className="col-sm-9"> {batch}</dd>
          <dt className="col-sm-3"> Bank</dt>
          <dd className="col-sm-9"> {bank}</dd>
          <dt className="col-sm-3"> Bank Account</dt>
          <dd className="col-sm-9"> {bankAccount}</dd>
          <dt className="col-sm-3"> Bank Branch</dt>
          <dd className="col-sm-9"> {bankBranch}</dd>
        </dl>
      </div>
    );
  }
}
