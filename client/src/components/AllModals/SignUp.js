import React from 'react';
import SignupForm from '../SignupForm'
import './signup.css'


const SignUp = props => (
    <div style={{backgroundImage: 'linear-gradient(to bottom right,#8d3901,#ff5722)', padding: '10px', borderRadius: '15px'}}>
    <SignupForm  />
    </div>
);

export default SignUp;