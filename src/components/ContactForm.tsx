import * as React from 'react';

import '../styles/contact-form.css';

const ContactForm: React.FC = () => {
    const [isValid, setIsValid] = React.useState(false);

    const validate = () => {
        // Add functionality or remove
    }

    return (
        <div className="contact-form">
            <h2>Heading Two</h2>
            <form className="form-content">
                <div className="form-row">
                    <input className="row-item" type="text" placeholder="First Name" />
                    <input className="row-item" type="text" placeholder="Last Name"/>
                </div>
                <div className="form-row">
                    <input className="row-item" type="text" placeholder="Title"/>
                    <input
                        required
                        id="email"
                        className="row-item"
                        type="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                </div>
                <div className="form-row">
                    <textarea id="message-box" className="row-item" placeholder="Message"/>
                </div>
                <input className="fill-button" type="submit"></input>
            </form>
        </div>
    )
}

export default ContactForm;