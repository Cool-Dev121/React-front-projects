import React, { Component } from 'react';

class AddContact extends Component {
    constructor(props){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
   

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            name: this.nameInput.current.value,
            name: this.nameInput.current.value,
        }
         
         console.log(contact);
    };

    static defaultProps = {
        name: 'balya',
        email: 'balya@gmail.com',
        phone: '0000000000'
    }

    render() {
        const {name, email, phone} = this.state;
        return ( 
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <form onSubmit={this.onSubmit}>
                    <div style={{color:'gold', fontSize:'18px'}} className="form-group">
                        <label htmlFor="name">Name :</label>
                        <input style={{color:'silver', background:'black', width:'95%'}} type="text" name="name" placeholder="Enter Name..." className="form-control form-control-lg" defaultValue={name} ref={this.nameInput} />
                           
                    </div>
                    <div style={{color:'gold', fontSize:'18px'}} className="form-group">
                        <label htmlFor="name">E-mail :</label>
                        <input style={{color:'silver', background:'black', width:'95%'}} type="email" name="email" placeholder="Enter Email..." className="form-control form-control-lg" defaultValue={email} ref={this.emailInput} />

                    </div>
                    <div style={{color:'gold', fontSize:'18px'}} className="form-group">
                        <label htmlFor="name">Phone No. :</label>
                        <input style={{color:'silver', background:'black', width:'95%'}} type="number" name="phone" placeholder="Enter Phone No." className="form-control form-control-lg" defaultValue={phone} ref={this.phoneInput}/>

                    </div>
                    <input type="submit" value="Add Contact" className="btn btn-light btn-block bg-primary"/>
                </form>
            </div>
        )
    }
}

export default AddContact;
