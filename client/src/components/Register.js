import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Register.css";
import backgroundImage from "../components/images/bg.jpg";

export default function Form() {
  const history = useHistory();
  // States for registration

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nic, setNic] = useState("");
  const [gitname, setGitname] = useState("");
  const [university, setUniversity] = useState("");
  const [batch, setBatch] = useState("");
  const [bank, setBank] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

 

  // Handling the  first name change
  const handleFname = (e) => {
    setFname(e.target.value);
    setSubmitted(false);
  };

  // Handling the  Last name change
  const handleLname = (e) => {
    setLname(e.target.value);
    setSubmitted(false);
  };

  // Handling the  Address change
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

  // Handling the  contact change
  const handleContactNumber = (e) => {
    setContactNumber(e.target.value);
    setSubmitted(false);
  };

  // Handling the  nic change
  const handleNic = (e) => {
    setNic(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  // Handling the git change
  const handleGitName = (e) => {
    setGitname(e.target.value);
    setSubmitted(false);
  };

  // Handling the git change
  const handleUniversity = (e) => {
    setUniversity(e.target.value);
    setSubmitted(false);
  };

  // Handling the batch change
  const handleBatch = (e) => {
    setBatch(e.target.value);
    setSubmitted(false);
  };

  // Handling the Bank change
  const handleBank = (e) => {
    setBank(e.target.value);
    setSubmitted(false);
  };

  // Handling the banck Account change
  const handleBankAccount = (e) => {
    setBankAccount(e.target.value);
    setSubmitted(false);
  };
  // Handling the banck Branch change
  const handleBankBranch = (e) => {
    setBankBranch(e.target.value);
    setSubmitted(false);
  };

 const handlePassword = (e) => {
   setPassword(e.target.value);
   setSubmitted(false);
  };
  
   const handleConfirmPassword = (e) => {
     setConfirmPassword(e.target.value);
     setSubmitted(false);
   };

  

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fname === "" ||
      lname === "" ||
      address === "" ||
      email === "" ||
      contactNumber === "" ||
      nic === "" ||
      gitname === "" ||
      // university === "" ||
      // batch === "" ||
      // bank === "" ||
      bankAccount === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
      alert("ALl the fields are mandatory!");
       return;
   
    } else {
      setSubmitted(true);
      setError(false);
      history.push("/");
      //  alert( {successMessage()});
    }
  };

 

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h6>User {fname} successfully registered!!</h6>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h6>Please enter all the fields</h6>
      </div>
    );
  };

  return (
    <div className="container">
      <img className="bgImage" src={backgroundImage} alt="" />
      <div className="card">
        <div className="form">
          <div className="card-header">User Registration</div>

          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form>
            <div className="card-body">
              <div className="group">
                <label className="label">First Name</label>
                <input
                  onChange={handleFname}
                  className="input"
                  value={fname}
                  type="text"
                />

                <label className="label">Last Name</label>
                <input
                  onChange={handleLname}
                  className="input"
                  value={lname}
                  type="text"
                />
              </div>
              <div className="group">
                <label className="label">Address</label>
                <input
                  onChange={handleAddress}
                  className="input"
                  value={address}
                  type="text"
                />
              </div>
              <div className="group">
                <label className="label">Email</label>
                <input
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  type="email"
                />
              </div>
              <div className="group">
                <label className="label">Contact Number</label>
                <input
                  onChange={handleContactNumber}
                  className="input"
                  value={contactNumber}
                  type="text"
                />
              </div>

              <div className="group">
                <label className="label">NIC</label>
                <input
                  onChange={handleNic}
                  className="input"
                  value={nic}
                  type="text"
                />
              </div>

              <div className="group">
                <label className="label">GIT Username</label>
                <input
                  onChange={handleGitName}
                  className="input"
                  value={gitname}
                  type="text"
                />
              </div>

              <div>
                <label className="label">University</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={handleUniversity}
                  value={university}
                >
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
                  onChange={handleBatch}
                  value={batch}
                >
                  <option selected> Batch 18</option>
                  <option value="1"> Batch 17</option>
                  <option value="2">Batch 16</option>
                  <option value="3">Batch 15</option>
                </select>
              </div>

              <hr className="hr" />
              <div>
                <label className="label">Bank Name</label>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={bank}
                  onChange={handleBank}
                >
                  <option selected> BOC</option>
                  <option value="1"> NSB</option>
                  <option value="2">HNB</option>
                  <option value="3">RDB</option>
                </select>
              </div>

              <div className="group">
                <label className="label">Account Number</label>
                <input
                  onChange={handleBankAccount}
                  className="input"
                  type="text"
                  value={bankAccount}
                />
              </div>

              <div>
                <label className="label">Branch</label>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  onChange={handleBankBranch}
                  value={bankBranch}
                >
                  <option selected> Gampaha</option>
                  <option value="1">Colombo</option>
                  <option value="2">Katubedda</option>
                  <option value="3">Panadura</option>
                </select>
              </div>
              <div className="group">
                <label className="label">Password</label>
                <input
                  onChange={handlePassword}
                  className="input"
                  value={password}
                  type="password"
                />
              </div>
              <div className="group">
                <label className="label">Confirm Password</label>
                <input
                  onChange={handleConfirmPassword}
                  className="input"
                  value={confirmPassword}
                  type="password"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="btn btn-outline-success"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
