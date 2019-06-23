import React, { Component } from 'react';
import './App.css'

const formValid = formErrors=>{
  let valid = true;
  Object.values(formErrors).forEach(val=>{
    val.length > 0 && (valid= false);
  })
  return valid;
}
class App extends Component {

  constructor(props){
    super(props);

    this.state={
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        passsword:""

      }
    };
  }
      
  handleSubmit= e => {
        e.preventDefault();


        if (formValid(this.state.formErrors)){
          console.log(`
            --Submitting--
          FirstName: ${this.state.firstName}
          LastName: ${this.state.lastName}
          email: ${this.state.email}
          password: ${this.state.password}
          `)
        } else{
          console.error('form invalid')
     }
  };

     handleChange = e =>{
       e.preventDefault();
       const {name, value} = e.target;
       let formErrors=this.state.formErrors;

       console.log("Name", name)
       console.log("Value", value)
      
       switch(name){
         case 'firstName':formErrors.firstName = value.length < 3 && value.length > 0 ? 'minimum 3 character required' : "";
         break;

         case 'lastName':formErrors.lastName = value.length < 3 && value.length > 0 ? 'minimum 3 character required' : "";
         break;
         
         case 'email':formErrors.email = value.length < 3 && value.length > 0 ? 'minimum 3 character required' : "";
         break;
         
         case 'password':formErrors.password = value.length < 6 && value.length > 0 ? 'minimum 6 character required' : "";
         break;
         default: break;
        }
          this.setState({formErrors, [name]: value},() => console.log(this.state));
     }


  render() {
    return (
    <div className="wrapper">
     <div className="form-wrapper">
       <h1>Create Account</h1>
       <form onSubmit={this.handleSubmit}>
       <div className="firstName">
         <label htmlFor="firstName">First Name</label>
         <input type="text" className="" placeholder="First Name" name="firstName" noValidate onChange={this.handleChange}/>
       </div>
       <div className="lastName">
         <label htmlFor="lastName">Last Name</label>
         <input type="text" className="" placeholder="last Name" name="lastName" noValidate onChange={this.handleChange}/>
       </div>
       


       <div className="email">
         <label htmlFor="email">First Name</label>
         <input type="email" className="" placeholder="Enter your Email" name="email" noValidate onChange={this.handleChange}/>
       </div>
       <div className="password">
         <label htmlFor="password">First Name</label>
         <input type="password" className="" placeholder="Enter your password" name="password" noValidate onChange={this.handleChange}/>
       </div>
        <div className="createAccount">
          <button type="submit">Create Account</button>
          <small>Already have an account?</small>
        </div>
       </form>
     </div>
    </div>
  );
    }
}

export default App
