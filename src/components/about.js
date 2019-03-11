import React, { Component } from 'react'; 
import PasswordMask from 'react-password-mask';
import Userlist from '../components/Userlist';
import { Grid, Cell } from 'react-mdl';
import { Breadcrumb } from 'react-bootstrap';

class about extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            nameError: '',
            phoneError: '',
            addressError: '',
            emailError: '',
            passwordError: ''            
        };
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value 
        }, () => { 
            this.validateName(); 
        });
    };

    handlePhoneChange = event => {
        this.setState({ phone: event.target.value 
        }, () => { 
            this.validatePhone(); 
        });
    };

    handleAddressChange = event => {
        this.setState({ address: event.target.value
        }, () => {
            this.validateAddress();
        });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value 
        }, () => {
            this.validateEmail();
        });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value
        }, () => {
            this.validatePassword();
        });
    };

    validateName = () => {
        const { name } = this.state ;
        this.setState({
            nameError: name.length > 3 ? null : 'Name must be longer then 3 caracters'
        });
    }

    validatePhone = () => {
        const { phone } = this.state ;
        this.setState({
            phoneError: phone.length > 10 && phone.match(/^(?=.*[0-9])/) ? null : 'Enter your Phone Number'
        });
    }

    validateAddress = () => {
        const { address } = this.state;
        this.setState({
            addressError: address.length > 100 ? null : 'Enter your address' 
        });
    }

    validateEmail = () => {
        const { email } = this.state;
        this.setState ({
            emailError: email.length > 3 && email.match(/^(?=.*[@])/) ? null : 'Name must be longer then 3 caracters and (@) symbol'
        });
     }

    validatePassword = () => {
        const { password } =this.state;
        this.setState ({
            passwordError: password.length > 8 && password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9])(?=.*[!@#$%^&*])/) ? null : 'Contain at least 8 characters, contain at least 1 number, contain at least 1 lowercase character (a-z), contain at least 1 uppercase character (A-Z), contains only 0-9a-zA-Z, contains special character'
        }); 
    } 

    render() { 
        return ( 
            <div>
                <Breadcrumb />
            </div>
            <div col={12}>
                <Grid>
                    <Cell className="user-left-col" col={6}>
                        <div className='form'>
                            <form onSubmit={this.handleSubmit}>
                                {/* name */}
                                <div className='form-group'>
                                    <label htmlFor='name'>Name: </label>
                                    <input
                                        name='name'
                                        className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                                        id='name'
                                        placeholder='Enter name'
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                        onBlur={this.validateName}
                                    />
                                    <div className='invalid-feedback'>{this.state.nameError}</div>
                                </div>

                                {/* email */}
                                <div className='form-group'>
                                    <label htmlFor='email'>Email: </label>
                                    <input
                                        name='email'
                                        className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                                        id='email'
                                        placeholder='Enter email'
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                        onBlur={this.validateEmail}
                                    />
                                    <div className='invalid-feedback'>{this.state.emailError}</div>
                                </div>
                                
                                {/* phone */}
                                <div className='form-group'>
                                    <label htmlFor='phone'>Phone: </label>
                                    <input
                                        name='phone'
                                        className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`}
                                        id='phone'
                                        placeholder='Enter phone'
                                        value={this.state.phone}
                                        onChange={this.handlePhoneChange}
                                        onBlur={this.validatePhone}
                                    />
                                    <div className='invalid-feedback'>{this.state.phoneError}</div>
                                </div>

                                {/* address */}
                                <div className='form-group'>
                                    <label htmlFor='address'>Address: </label>
                                    <input
                                        name='address'
                                        className={`form-control ${this.state.addressError ? 'is-invalid' : ''}`}
                                        id='address'
                                        placeholder='Enter address'
                                        value={this.state.address}
                                        onChange={this.handleAddressChange}
                                        onBlur={this.validateAddress}
                                    />
                                    <div className='invalid-feedback'>{this.state.addressError}</div>
                                </div>

                                {/* password */}
                                <div className='form-group'>
                                    <label htmlFor='password'>Password: </label>
                                    <PasswordMask
                                        name='password'
                                        className={`form-control ${ this.state.passwordError ? 'is-invalid' : ''}`}
                                        id='password'
                                        type='password'
                                        placeholder='Enter password'
                                        value={ this.state.password }
                                        onChange={this.handlePasswordChange.bind(this)}
                                        onBlur={this.validatePassword}
                                        useVendorStyles={true}
                                    />
                                    <div className='invalid-feedback'>{this.state.passwordError}</div>
                                </div>
                                <button type='submit' className='btn btn-success btn-block' disabled={this.state.isDisabled} onClick={this.submitForm}> Submit </button>
                            </form>
                        </div>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell className="user-right-col list" col={6}>
                        <div>
                            <Userlist />
                        </div>
                    </Cell>
                </Grid>

            </div>
            
            );
        }
    }


export default about;