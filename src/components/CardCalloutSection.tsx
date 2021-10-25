import * as React from 'react';
import CardCallout from '../components/CardCallout';

import talkie from '../assets/img/talkie.png';
import rabbit from '../assets/img/rabbit.png';
import shield from '../assets/img/shield.png';

import '../styles/card-callout-section.css';

interface cardData {
    path: string,
    alt: string,
    heading: string,
    description: string
}

let cd: cardData[] = [
    {
        path: talkie,
        alt: "Microphone",
        heading:"Heading Two",
        description: "Lorem Ipsum",
    },
    {
        path: rabbit,
        alt: "Microphone",
        heading:"Heading Two",
        description: "Lorem Ipsum",
    },
    {
        path: shield,
        alt: "Microphone",
        heading:"Heading Two",
        description: "Lorem Ipsum",
    },
];

const CardCalloutSection: React.FC = () => {
    return (
        <div className="ccs-container">
            {cd.map((item, index) => (
                <CardCallout
                    key={index}
                    path={item.path}
                    alt={item.alt}
                    heading={item.heading}
                    description={item.description}
                ></CardCallout>
            ))}
        </div>
    );
};

export default CardCalloutSection;