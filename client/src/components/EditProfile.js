import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styles from "./Register/styles.module.css";
import Swal from "sweetalert2";

const EditProfile = () => {
    const history = useHistory()
    const [data, setData] = useState({
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
    const [error, setError] = useState("");


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:9000/employee/createEmployee";
            const { data: res } = await axios.post(url, data);

            Swal.fire({
                title: "Success",
                type: "success",
                text: "You have sucessfully Registered.",
                confirmButtonColor: "#3bb19b",
                timer: 1500,
            });
            history.push("/login");

            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h4>Back to </h4>
                    <Link to="/home">
                        <button type="button" className={styles.white_btn}>
                            Home
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h3>Update your Details</h3>

                        <input
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            onChange={handleChange}
                            value={data.fname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            onChange={handleChange}
                            value={data.lname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                            value={data.address}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            name="contactNumber"
                            onChange={handleChange}
                            value={data.contactNumber}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="NIC"
                            name="nic"
                            onChange={handleChange}
                            value={data.nic}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Git User Name"
                            name="gitUsername"
                            onChange={handleChange}
                            value={data.gitUsername}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="University"
                            name="university"
                            onChange={handleChange}
                            value={data.university}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Batch"
                            name="batch"
                            onChange={handleChange}
                            value={data.batch}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Bank"
                            name="bank"
                            onChange={handleChange}
                            value={data.bank}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Bank Account"
                            name="bankAccount"
                            onChange={handleChange}
                            value={data.bankAccount}
                            required
                            className={styles.input}
                        />

                        <input
                            type="text"
                            placeholder="Bank Branch"
                            name="bankBranch"
                            onChange={handleChange}
                            value={data.bankBranch}
                            required
                            className={styles.input}
                        />

                        
            <input
              type="file"
              placeholder="Upload your image"
              filename="image"
            //   onChange={}
              required
              className={styles.input}
            />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
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

export default EditProfile;
