import * as React from 'react';

import '../styles/contact-text.css';

const ContactText: React.FC = () => {
    return (
        <div className="contact-text">
            <h1><span className="gilded">Heading</span> One</h1>
            <div className="text-wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, orci sed ullamcorper molestie, elit est bibendum risus, sit amet mollis tellus massa ut augue. Proin vehicula tempus dolor, nec mollis nibh. Quisque gravida condimentum nulla quis dictum. Cras blandit purus leo, eget gravida arcu hendrerit ac. Vivamus tempus commodo urna vel pharetra. Ut blandit, nunc et sagittis tempus, justo leo egestas neque, eu sagittis purus arcu eget tortor.</p>
            </div>
        </div>
    )
}

export default ContactText;