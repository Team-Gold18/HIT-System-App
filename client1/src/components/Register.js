import React, { Component } from "react";
import axios from "axios";
import backgroundImage from "../components/images/bg.jpg";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      address: "",
      email: "",
      contactNumber: "",
      nic: "",
      gitUsername: "",
      university: "",
      batch: "",
      bank: "",
      bankAccount: "",
      bankBranch: "",
      password: "",
    
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
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
      password,
    
    } = this.state;

    const data = {
      fname: fname,
      lname: lname,
      address: address,
      email: email,
      contactNumber: contactNumber,
      nic: nic,
      gitUsername: gitUsername,
      university: university,
      batch: batch,
      bank: bank,
      bankAccount: bankAccount,
      bankBranch: bankBranch,
      password: password,
    
    };


// if (password !== confirmPassword) {
//   setTimeout(() => {
//   }, 5000);
//   return alert("Passwords do not match");
// }
    axios
      .post("http://localhost:9000/employee/createEmployee", data)
      .then((res) => {
        if (res.data.success) {

      this.setState({
            fname: "",
            lname: "",
            address: "",
            email: "",
            contactNumber: "",
            nic: "",
            gitUsername: "",
            university: "",
            batch: "",
            bank: "",
            bankAccount: "",
            bankBranch: "",
            password: "",
        
      });
        
        }
      });
   
  };
  render() {
    return (
      <div className="container">
        <img className="bgImage" src={backgroundImage} alt="" />
        <div className="card">
          <div className="form">
            <div className="card-header">User Registration</div>

            <form action="" method="post">
              <div className="card-body">
                <div className="group">
                  <label className="label">First Name</label>
                  <input
                    name="fname"
                    className="input"
                    type="text"
                    value={this.state.fname}
                    onChange={this.handleInputChange}
                    required
                  />
                  <label className="label">Last Name</label>
                  <input
                    name="lname"
                    className="input"
                    type="text"
                    value={this.state.lname}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="group">
                  <label className="label">Address</label>
                  <input
                    name="address"
                    className="input"
                    type="text"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="group">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    className="input"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="group">
                  <label className="label">Contact Number</label>
                  <input
                    name="contactNumber"
                    className="input"
                    type="text"
                    value={this.state.contactNumber}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="group">
                  <label className="label">NIC</label>
                  <input
                    name="nic"
                    className="input"
                    type="text"
                    value={this.state.nic}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="group">
                  <label className="label">GIT Username</label>
                  <input
                    name="gitUsername"
                    className="input"
                    type="text"
                    value={this.state.gitUsername}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div>
                  <label className="label">University</label>
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    name="university"
                    value={this.state.university}
                    onChange={this.handleInputChange}
                  >
                    <option> </option>
                    <option value="UOM"> UOM</option>
                    <option value="UOC"> UOC</option>
                    <option value="UOK">UOK</option>
                    <option value="UOP">UOP</option>
                  </select>
                </div>
                <div>
                  <label className="label">Batch</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    name="batch"
                    value={this.state.batch}
                    onChange={this.handleInputChange}
                  >
                    <option> </option>
                    <option value="batch18"> Batch 18</option>
                    <option value="batch17"> Batch 17</option>
                    <option value="batch16">Batch 16</option>
                    <option value="batch15">Batch 15</option>
                  </select>
                </div>

                <hr className="hr" />
                <div>
                  <label className="label">Bank Name</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    name="bank"
                    value={this.state.bank}
                    onChange={this.handleInputChange}
                  >
                    <option> </option>
                    <option value="BOC"> BOC</option>
                    <option value="NSB"> NSB</option>
                    <option value="HNB">HNB</option>
                    <option value="RDB">RDB</option>
                  </select>
                </div>

                <div className="group">
                  <label className="label">Account Number</label>
                  <input
                    name="bankAccount"
                    className="input"
                    type="text"
                    value={this.state.bankAccount}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div>
                  <label className="label">Branch</label>
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    name="bankBranch"
                    value={this.state.bankBranch}
                    onChange={this.handleInputChange}
                  >
                    <option> </option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Katubedda">Katubedda</option>
                    <option value="Panadura">Panadura</option>
                  </select>
                </div>

                <div className="group">
                  <label className="label">Password</label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
              
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  onClick={this.onSubmit}
                >
                  save
                </button>
                {/* <div className="messages">
                {errorMessage()}
                {successMessage()}
              </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
