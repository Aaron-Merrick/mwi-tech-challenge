import * as React from 'react';
import { forEachChild } from 'typescript';

import '../styles/puzzle-section.css';

let object1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
let object2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
let noDupes = [];

function curate(): void {
    object1.forEach(element => {
        object2.forEach(element2 => {
            if (element2 === element) {
                object2.splice(object2.indexOf(element2), 1)
            }
        });
    });
    
    noDupes = [...object1, ...object2];
    

    /* More efficient at lower numbers */

    // let noDupes = [...object1, ...object2];
    // noDupes.forEach(element => {
    //     for (let i: number = noDupes.indexOf(element) + 1; i < noDupes.length; i++) {
    //         if (noDupes[i] === element) {
    //             noDupes.splice(i, 1);
    //         }
    //     }
    // });
}

const ResultList: React.FC = () => {
    return (
        <div>
            <ul>
            {
            
            /* {cardData.map((item, index) => (
                <CardCallout
                    path={item.path}
                    alt={item.alt}
                    heading={item.heading}
                    description={item.description}
                ></CardCallout>
            ))} */}
            </ul>
        </div>
    )
};

const PuzzleSection: React.FC = () => {
    return (
        <div className="puzzle-section">
            <h1><span className="gilded">Heading</span> 1</h1>
            <p>Lorem ipsum dolor sit <button onClick={curate}>amet,</button> consectetur adipiscing elit. Nulla ultricies, orci sed ullamcorper molestie, elit est bibendum risus, sit amet mollis tellus massa ut augue. Proin vehicula tempus dolor, nec mollis nibh. Quisque gravida condimentum nulla quis dictum. Cras blandit purus leo, eget gravida arcu hendrerit ac. Vivamus tempus commodo urna vel pharetra. Ut blandit, nunc et sagittis tempus, justo leo egestas neque, eu sagittis purus arcu eget tortor.</p>
            { if (noDupes.length > 0) {
                () => ( <ResultList></ResultList> ) 
            } else {
                <h3>Click the Link!</h3>
            }}
        </div>
    );
};

export default PuzzleSection;