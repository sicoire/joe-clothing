import React from 'react'
import SignUp from '../../component/sign-up/sign-up.component'
import SignIn from '../../component/signin/signin.component'


import './Sign-In-Sign-Up.styles.scss'

const SignInAndSignUpPage = () => (
<div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
</div>
);

export default SignInAndSignUpPage;