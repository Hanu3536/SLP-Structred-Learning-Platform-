import React, { useState } from "react";
import { Auth } from 'aws-amplify';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import { notification } from 'antd';


function Signup() {
    const [redirect, setRedirect] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSignup = () => {
        if (email.length == 0 || firstname.length == 0 || lastname.length == 0 || password.length == 0 || phone.length == 0) {
            console.log('email empty');
            notification.error({
                message: 'Error',
                description: 'One of the field is empty. Please check.',
                placement: 'bottomRight',
                duration: 1.5
            });

            return;
        }

        if (password !== confirmPassword) {
            console.log("Passwords do not match.");

            notification.error({
                message: 'Error',
                description: 'Password and confirm password must match.',
                placement: 'bottomRight',
                duration: 1.5
            });

            return;
        }

            // show loader
            setLoading(true);


            Auth.signUp({
                username: email,
                password,
                attributes: {
                    email: email,
                    name: `${firstname}_${lastname}`,
                    phone_number: phone
                }
            })
                .then(() => {
                    notification.success({
                        message: 'Succesfully signed up user!',
                        description: 'Account created successfully, Redirecting you in a few seconds!',
                        placement: 'topRight',
                        duration: 1.5,
                        onClose: () => {
                            setRedirect(true);
                        }
                    });

                    setTimeout(function() {
                        setRedirect(true);
                     }, 2000);
                    
                })
                .catch(err => {
                    notification.error({
                        message: 'Error',
                        description: 'Error signing up user',
                        placement: 'bottomLeft',
                        duration: 1.5
                    });

                    
                setLoading(false);
                });
        
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <div>
                <label htmlFor="firstname">Firstname:</label>
                <input type="firstname" id="firstname" name="firstname" onChange={handleFirstnameChange} required />
            </div>

            <div>
                <label htmlFor="lastname">Lastname:</label>
                <input type="lastname" id="lastname" name="lastname" onChange={handleLastnameChange} required />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleEmailChange} required />
            </div>

            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Enter a 10-digit phone number" onChange={handlePhoneChange} required />
            </div>


            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} required />
            </div>

            <div>
                <label htmlFor="confirm password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="password" onChange={handleConfirmPasswordChange} required />
            </div>

            <div className="option">
                <input type="submit" value="Sign Up" onClick={() => handleSignup(firstname, lastname, email, phone, password, confirmPassword)} />
                <input type="submit" value="Cancel" onClick={() => navigate('/login')} />
            </div>
            {redirect && ( // Check if redirect is true
                <redirect
                    to={{
                        pathname: '/verify-code',
                        search: `?email=${email}` // Assuming email is one of your state variables
                    }}
                />
            )}
        </div>
    );
}


export default Signup;
