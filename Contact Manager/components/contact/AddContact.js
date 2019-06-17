import React, { Component } from 'react';
import {Consumer} from '../context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    
        
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
       
        const{name, email, phone} = this.state
       
        if(name===''){this.setState({errors: {name:'Name is required'}}); return;};
        if(email===''){this.setState({errors: {email:'Email is required'}});return;};
        if(phone===''){this.setState({errors: {phone:'Phone No. is required'}});return;};



        const newContact = {
            
            name,
            email,
            phone,
                  
        };
           const res = await 
           axios.post('https://jsonplaceholder.typicode.com/users', newContact);
           dispatch({type: 'ADD_CONTACT', payload: res.data}); 
       
          
          dispatch({type: 'ADD_CONTACT', payload: newContact})
          this.setState({
            name: '',
            email: '',
            phone: '',
            errors:{}

          });
          this.props.history.push('/');

    };

    onChange = e => this.setState({[e.target.name]: e.target.value});
    

    render() {
        const {name, email, phone, errors} = this.state;
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                    />
                     <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />
                     <TextInputGroup
                        label="Phone No."
                        name="phone"
                        type="number"
                        placeholder="Enter Phone No."
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                    />
                           
                    
                    
                    <input type="submit" value="Add Contact" className="btn btn-light btn-block bg-primary"/>
                </form>
            </div>
                    )
                } }
            </Consumer>
        )

       
        
    }
}

export default AddContact;
