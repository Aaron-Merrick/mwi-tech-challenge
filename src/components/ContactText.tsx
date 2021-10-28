import * as React from 'react';
import { textApi } from '../http';

import '../styles/contact-text.css';

interface apiData {
    title: string,
    content: string
}

let ad: apiData;

const ContactText: React.FC = () => {

    const [text, setText] = React.useState(ad);

    React.useEffect (() =>{
        textApi.get('/text-content')
        .then(res => {
            setText({title: [...res.data][0].title, content: [...res.data][0].content})
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className="contact-text">
            <h1><span className="gilded">Heading</span> One</h1>
            <div className="text-wrapper">
                <p>{ text === undefined ? null : text.content }</p>
            </div>
        </div>
    )
}

export default ContactText;