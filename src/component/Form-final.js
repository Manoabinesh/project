
import React, { useState } from 'react';

const FinalForm = () => {
    const initial_value = {
        User_name: "",
        Email: "",
        password: "",
        confirm_password: "",
    };

    const [inputValue, setInputValue] = useState(initial_value);
    const [errorValue, setErrorValue] = useState({});
    const [btn, seterrorbtn] = useState({});

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validation(inputValue);
        setErrorValue(errors);
        const uidisplay = ({ ...inputValue });
        seterrorbtn(uidisplay);
        // console.log(error2);
    };

    const validation = (inputValue) => {
        let errors = {};
        console.log(errors);
        if (inputValue.User_name === "") {
            errors.User_name = "Please enter your name";
        } else if (inputValue.User_name.length < 8) {
            errors.User_name = "Enter valid name (at least 8 characters)";
        }

        if (inputValue.Email === "") {
            errors.Email = "Enter your email id";
        } else if (!inputValue.Email.trim.endsWith("@gmail.com")) {
            errors.Email = "Enter a valid email id";
        }

        if (inputValue.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        if (inputValue.confirm_password !== inputValue.password) {
            errors.confirm_password = "Passwords do not match";
        }

        return errors;
    };

    return (
        <div className='userform'>
            <div>
                <h1>Form</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div><label>Username</label></div>
                            <input type='text' name='User_name' placeholder='UserName' onChange={handleChange} />
                            <h2>{errorValue.User_name}</h2>
                        </div>
                        <div>
                            <div><label>Email</label></div>
                            <input type='email' name='Email' placeholder='Email' onChange={handleChange} />
                            <h2>{errorValue.Email}</h2>
                        </div>
                        <div>
                            <div><label>Password</label></div>
                            <input type='password' name='password' placeholder='Password' onChange={handleChange} />
                            <h2>{errorValue.password}</h2>
                        </div>
                        <div>
                            <div><label>Confirm Password</label></div>
                            <input type='password' name='confirm_password' placeholder='Confirm password' onChange={handleChange} />
                            <h2>{errorValue.confirm_password}</h2>
                        </div>
                        <button type="submit">Submit</button>
                        <div>
                            <div>
                                <h4> Username :</h4><h5>{btn.User_name}</h5></div>
                            <div><h4>Email:</h4>
                                <h5>{btn.Email}</h5> </div>
                            <div><h4>Password :</h4>
                                <h5>{btn.password}</h5></div>
                            <div><h4> Confirm Password:</h4>
                                <h5>{btn.confirm_password}</h5>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default FinalForm;
