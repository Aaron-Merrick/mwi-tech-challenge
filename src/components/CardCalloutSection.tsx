import * as React from 'react';
import CardCallout from '../components/CardCallout';
import { textApi } from '../http'

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

let cd: cardData[];

interface apiData {
    title: string,
    content: string
}

let cardText: apiData[];

const CardCalloutSection: React.FC = () => {

    const [cardContent, setCardContent] = React.useState(cd);

    React.useEffect (() => {
        textApi.get('/text-content')
        .then(res => {
            cardText = [...res.data];
            setCardContent([
                {
                    path: talkie,
                    alt: "Microphone",
                    heading: cardText[1].title,
                    description: cardText[1].content,
                },
                {
                    path: rabbit,
                    alt: "Rabbit",
                    heading: cardText[2].title,
                    description: cardText[2].content,
                },
                {
                    path: shield,
                    alt: "Shield",
                    heading: cardText[2].title,
                    description: cardText[2].content,
                },
            ])       
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    
    return (
        <div className="ccs-container">
        { cardContent === undefined ? null :
            cardContent.map((item, index) => (
                <CardCallout
                    key={index}
                    path={item.path}
                    alt={item.alt}
                    heading={item.heading}
                    description={item.description}
                ></CardCallout>
            ))
        }
        </div>
    );
};

export default CardCalloutSection;