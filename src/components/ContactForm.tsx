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
    isValid: Boolean
}

let emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ContactForm extends React.Component<formProps, formState> {

    public readonly state: formState = {
        form: {
            first_name: '',
            last_name: '',
            title: '',
            email: '',
            message: ''
        },
        isValid: true
    }

    constructor(formProps: any) {
        super(formProps);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({form: {
            ...this.state.form,
            [name]: value
        }});
        this.validate() ? this.setState({isValid: true}) : this.setState({isValid: false});
    }

    validate(): boolean {
        return emailRegExp.test(this.state.form.email)
    }

    sendResults = () => {
        if (this.validate()) {
                this.setState({isValid: true});
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
        } else {
            this.setState({isValid: false});
        }
    }

    render() {
        return (
            <div className="contact-form">
                <h2 id="contact-heading">Heading Two</h2>
                <form className="form-content">
                    <div className="form-row">
                        <input className="row-item" type="text" name="first_name" placeholder="First Name" value={this.state.form.first_name} onChange={ this.handleChange }/>
                        <input className="row-item" type="text" name="last_name" placeholder="Last Name" value={this.state.form.last_name} onChange={ this.handleChange }/>
                    </div>
                    <div className="form-row">
                        <input className="row-item" type="text" name="title" placeholder="Title" value={this.state.form.title} onChange={ this.handleChange }/>
                        <input
                            required
                            id="email"
                            className="row-item"
                            type="email"
                            name="email"
                            style={ this.state.isValid ? {} : {border: '2px solid var(--mwi-red)'} }
                            placeholder="Email"
                            value={ this.state.form.email }
                            onChange={ this.handleChange }/>
                        {
                            this.state.isValid === true ? null :
                            <p id="required-text">Required</p>
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