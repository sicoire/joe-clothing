import React from 'react'
import CustomButton from '../custom-button/custom-button.comonent';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfilDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss'

class SignUp extends React.Component {
constructor(){
    super();

    this.state={
        displayName : '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}

hundleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
        alert("password confermation wrong");
        return;
    }
try{
    const {user} = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfilDocument(user, {displayName});

    this.setState({
        displayName : '',
        email: '',
        password: '',
        confirmPassword: ''
    })
}catch(error){
console.error(error);
}
   


}

hundleChange = (event) =>{
const {value, name} = event.target;
this.setState({[name] : value});

}
render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return(
<div className="sign-up">
<h2 className="title">I do not have a account</h2>
<span>Sign up  with your email and password</span>
<form className="sign-up-form" onSubmit={this.hundleSubmit}>
<FormInput 
type="text" 
name="displayName"
value={displayName}
label="Display Name"
onChange={this.hundleChange}
required
/>
<FormInput 
type="text" 
name="email"
value={email}
label="Email"
onChange={this.hundleChange}
required
/>
<FormInput 
type="password" 
name="password"
value={password}
label="Password"
onChange={this.hundleChange}
required
/>
<FormInput 
type="password" 
name="confirmPassword"
value={confirmPassword}
label="Confirm Password"
onChange={this.hundleChange}
required
/>
<CustomButton type="submit">SIGN UP</CustomButton>
</form>
</div>
    );
}
}

export default SignUp;