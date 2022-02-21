
import { Link,useHistory} from "react-router-dom";
import styles from "../Register/styles.module.css";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import axios from "axios";


const Register = () => {
  const history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nic, setNic] = useState("");
  const [gitUsername, setGitUsername] = useState("");
  const [university, setUniversity] = useState("");
  const [batch, setBatch] = useState("");
  const [bank, setBank] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [password, setPassword] = useState("");
  const [filename, setFileName] = useState("");
 const [error, setError] = useState("");

 
  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };


  const changeOnClick = (e) => {
    e.preventDefault();
     
       const formData = new FormData();

       formData.append("fname", fname);
       formData.append("lname", lname);
       formData.append("address", address);
       formData.append("email", email);
       formData.append("contactNumber", contactNumber);
       formData.append("nic", nic);
       formData.append("gitUsername", gitUsername);
       formData.append("university", university);
       formData.append("batch", batch);
       formData.append("bank", bank);
       formData.append("bankAccount", bankAccount);
       formData.append("bankBranch", bankBranch);
       formData.append("password", password);
       formData.append("image", filename);

       setFname("");
       setLname("");
       setAddress("");
       setEmail("");
       setContactNumber("");
       setNic("");
       setGitUsername("");
       setUniversity("");
       setBatch("");
       setBank("");
       setBankAccount("");
       setBankBranch("");
       setFileName("");
       setPassword("");

      //  axios.post('http://localhost:9000/employee/createEmployee',formData)
      //  .then((res)=>(res.data.success))
      //  .catch((err)=>{
      //      console.log(err);
      //  })

        axios
          .post("http://localhost:9000/employee/createEmployee", formData)
          .then((res) => res.data.success)
          .catch((error) => {
           if (
             error.response &&
             error.response.status >= 400 &&
             error.response.status <= 500
           ) {
            setError(error.response.data.message);
           }  else {
             console.log(error);
           }
          });

    
    
    
};

          
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h6>Do you have an Account? </h6>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Log In
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={changeOnClick}>
            <h3>Create Account</h3>

            <input
              type="text"
              placeholder="First Name"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Contact Number"
              id="fname"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="NIC"
              id="nic"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Git User Name"
              id="gitUsername"
              value={gitUsername}
              onChange={(e) => setGitUsername(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="University"
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Batch"
              id="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Bank"
              id="bank"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Bank Account"
              id="bankAccount"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Bank Branch"
              id="bankBranch"
              value={bankBranch}
              onChange={(e) => setBankBranch(e.target.value)}
              required
              className={styles.input}
            />

            <input
              type="file"
              placeholder="Upload your image"
              filename="image"
              onChange={onChangeFile}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>} 
            <button type="submit" className={styles.green_btn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;



// import { useState } from "react";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import styles from "../Register/styles.module.css";
// import Swal from "sweetalert2";

// const Register = () => {
//   const history = useHistory();
//   const [data, setData] = useState({
//     fname: "",
//     lname: "",
//     address: "",
//     email: "",
//     contactNumber: "",
//     nic: "",
//     gitUsername: "",
//     university: "",
//     batch: "",
//     bank: "",
//     bankAccount: "",
//     bankBranch: "",
//     password: "",
//     image:""
//   });
//   const [error, setError] = useState("");

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:9000/employee/createEmployee";
//       const { data: res } = await axios.post(url, data);

//       Swal.fire({
//         title: "Success",
//         type: "success",
//         text: "You have sucessfully Registered.",
//         confirmButtonColor: "#3bb19b",
//         timer: 1500,
//       });
//       history.push("/login");

//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <div className={styles.signup_container}>
//       <div className={styles.signup_form_container}>
//         <div className={styles.left}>
//           <h6>Do you have an Account? </h6>
//           <Link to="/login">
//             <button type="button" className={styles.white_btn}>
//               Log In
//             </button>
//           </Link>
//         </div>
//         <div className={styles.right}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h3>Create Account</h3>

//             <input
//               type="text"
//               placeholder="First Name"
//               name="fname"
//               onChange={handleChange}
//               value={data.fname}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lname"
//               onChange={handleChange}
//               value={data.lname}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               name="address"
//               onChange={handleChange}
//               value={data.address}
//               required
//               className={styles.input}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Contact Number"
//               name="contactNumber"
//               onChange={handleChange}
//               value={data.contactNumber}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="NIC"
//               name="nic"
//               onChange={handleChange}
//               value={data.nic}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Git User Name"
//               name="gitUsername"
//               onChange={handleChange}
//               value={data.gitUsername}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="University"
//               name="university"
//               onChange={handleChange}
//               value={data.university}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Batch"
//               name="batch"
//               onChange={handleChange}
//               value={data.batch}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Bank"
//               name="bank"
//               onChange={handleChange}
//               value={data.bank}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Bank Account"
//               name="bankAccount"
//               onChange={handleChange}
//               value={data.bankAccount}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Bank Branch"
//               name="bankBranch"
//               onChange={handleChange}
//               value={data.bankBranch}
//               required
//               className={styles.input}
//             />

//             <input
//               type="file"
//               placeholder="Upload your image"
//               image="image"
//               onChange={handleChange}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             {error && <div className={styles.error_msg}>{error}</div>}
//             <button type="submit" className={styles.green_btn}>
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;