import React from 'react'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.comonent';
import FormInput from '../form-input/form-input.component';

import './signin.styles.scss'

class SignIn extends React.Component {
constructor(props){
super(props);

this.state = {
    email : '',
    password : ''
}
}
handleSubmit = async event => {
event.preventDefault();
const {email, password} = this.state;
try{
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({email : '', password : ''});
}catch(error){
console.error(error);
}

};
handleChange = event => {
 const { value, name} = event.target;
 this.setState({[name] : value});
 } ;
render(){
    return (
        <div className="sign-in">
            <h2>I already have account</h2>
            <span>Sign in</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput  name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
                
                <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
                <div className="buttons">
                <CustomButton type="submit" >SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    {' '}   
                SIGN IN WITH GOOGLE
                {' '}
                </CustomButton>
                </div>
                
            </form>
        </div>
    )
}
}

export default SignIn;