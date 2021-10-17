import * as React from 'react';

import '../styles/card-callout.css';

interface CardProps {
    path: string,
    alt: string,
    heading: string,
    description: string
}

const CardCallout: React.FC<CardProps> = ({path, alt, heading, description}: CardProps) => {
    return (
        <div className="card-callout">
            <div className="card-icon-container">
                <img src={path} alt={alt} className="card-icon"/>
            </div>
            <div className="card-text-container">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            <button className="card-button">Learn More</button>
        </div>
    );
};

export default CardCallout;