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

let cardData: cardData[] = [
    {
        path: talkie,
        alt: "Microphone",
        heading:"Heading 2",
        description: "Lorem Ipsum",
    },
    {
        path: rabbit,
        alt: "Microphone",
        heading:"Heading 2",
        description: "Lorem Ipsum",
    },
    {
        path: shield,
        alt: "Microphone",
        heading:"Heading 2",
        description: "Lorem Ipsum",
    },
];

const CardCalloutSection: React.FC = () => {
    return (
        <div className="ccs-container">
            {cardData.map((item, index) => (
                <CardCallout
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