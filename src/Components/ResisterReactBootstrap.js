import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';
const auth = getAuth(app)

const ResisterReactBootstrap = () => {
    const[passwordError, setPasswordError] = useState('');
    const[success, setSuccess] = useState(false);
    
    const hanleResister = event =>{
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // validate password
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('please provide at least two uppercase character');
            return;
        }
        if(!/.{6}/.test(password)){
            setPasswordError('please provide at least 6 character');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('please add at least 1 special character');
            return;
        }
        // kono error na khaile 
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setSuccess(true)
            form.reset();
            verifyEmail();
            updateUserName(name)
        })
        .catch(error =>{
            console.error('error',error)
            setPasswordError(error.message)
        })
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then( ()=>{
            alert('please check your email and verify')
        })
    }


    const updateUserName = (name) =>{
        updateProfile(auth.currentUser,{
            displayName : name
        })
        .then( ()=>{
            console.log('display name updated')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Resister</h3>
            <Form onSubmit={hanleResister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {
                    success && <p className='text-success'>user created succuessfully.</p>
                }
                <Button variant="primary" type="submit">
                    Resister
                </Button>
            </Form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default ResisterReactBootstrap;