import * as React from 'react';

import { formApi } from '../http';

import '../styles/contact-form.css';

interface formProps {}

interface formState {
    form: {
        first_name: string,
        last_name: string,
        title: string,
        email: string,
        message: string
    },
    fnameValid: Boolean,
    lnameValid: Boolean,
    emailValid: Boolean,
    formValid: Boolean
}

//eslint-disable-next-line
let emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ContactForm extends React.Component<formProps, formState> {

    public readonly state: formState = {
        form: {
            first_name: '',
            last_name: '',
            title: '',
            email: '',
            message: ''
        },
        fnameValid: true,
        lnameValid: true,
        emailValid: true,
        formValid: false
    }

    constructor(formProps: any) {
        super(formProps);
        this.handleChange = this.handleChange.bind(this);
        this.handleFname = this.handleFname.bind(this);
        this.handleLname = this.handleLname.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form: {
            ...this.state.form,
            [name]: value
        }});
    }

    handleFname(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form: {
            ...this.state.form,
            [name]: value
        }});
        this.validateName(value) ? this.setState({fnameValid: true}) : this.setState({fnameValid: false});
    }

    handleLname(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form: {
            ...this.state.form,
            [name]: value
        }});
        this.validateName(value) ? this.setState({lnameValid: true}) : this.setState({lnameValid: false});
    }

    handleEmail(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form: {
            ...this.state.form,
            [name]: value
        }});
        this.validateEmail() ? this.setState({emailValid: true}) : this.setState({emailValid: false});
    }

    validateName(s: string): boolean {
        return s.length > 0 ? true : false;
    }

    validateEmail(): boolean {
        return emailRegExp.test(this.state.form.email)
    }

    sendResults = () => {
        
        if (this.state.fnameValid
            || this.state.lnameValid
            || this.state.emailValid) {
            formApi.post('/form-results',
            {
                first_name: this.state.form.first_name,
                last_name: this.state.form.last_name,
                title: this.state.form.title,
                email: this.state.form.email,
                message: this.state.form.message
            })
            .then((res) => {
                alert('Submitted Succesfully!');
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <div className="contact-form">
                <h2 id="contact-heading">Heading Two</h2>
                <form className="form-content">
                    <div className="form-row">
                        <input className="row-item" type="text" name="first_name" style={ this.state.fnameValid ? {} : {border: '2px solid var(--mwi-red)'} } placeholder="First Name" value={this.state.form.first_name} onChange={ this.handleFname }/>
                        {
                            this.state.fnameValid === true ? null :
                            <label id="required-fname-text">Required</label>
                        }
                        <input className="row-item" type="text" name="last_name" style={ this.state.lnameValid ? {} : {border: '2px solid var(--mwi-red)'} } placeholder="Last Name" value={this.state.form.last_name} onChange={ this.handleLname }/>
                        {
                            this.state.lnameValid === true ? null :
                            <label id="required-text-right">Required</label>
                        }
                    </div>
                    <div className="form-row">
                        <input className="row-item" type="text" name="title" placeholder="Title" value={this.state.form.title} onChange={ this.handleChange }/>
                        <input
                            required
                            id="email"
                            className="row-item"
                            type="email"
                            name="email"
                            style={ this.state.emailValid ? {} : {border: '2px solid var(--mwi-red)'} }
                            placeholder="Email"
                            value={ this.state.form.email }
                            onChange={ this.handleEmail }/>
                        {
                            this.state.emailValid === true ? null :
                            <label id="required-text-right">Required</label>
                        }
                    </div>
                    <div className="form-row">
                        <textarea id="message-box" className="row-item" name="message" placeholder="Message" value={this.state.form.message} onChange={ this.handleChange }/>
                    </div>
                    <input className="fill-button" type="button" value="Submit" onClick={this.sendResults}/>
                </form>
            </div>
        )
    }
}

export default ContactForm;