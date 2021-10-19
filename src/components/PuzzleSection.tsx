import * as React from 'react';

import '../styles/puzzle-section.css';

let object1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
let object2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
let noDupes: Array<string> = [];

function curate(): void {

    [...object1, ...object2].map((item, index) => (
        !noDupes.includes(item) ? 
            noDupes.push(item) : null
        )
    )
    console.log(noDupes);
}

const ResultList: React.FC = () => {
    return (
        <div>
            <ul>
            {
                noDupes.map((item, index) => (
                    <li>item</li>
                ))
            }
            </ul>
        </div>
    )
};

const PuzzleSection: React.FC = () => {
    return (
        <div className="puzzle-section">
            <h1><span className="gilded">Heading</span> 1</h1>
            <p>Lorem ipsum dolor sit <button onClick={curate}>amet,</button> consectetur adipiscing elit. Nulla ultricies, orci sed ullamcorper molestie, elit est bibendum risus, sit amet mollis tellus massa ut augue. Proin vehicula tempus dolor, nec mollis nibh. Quisque gravida condimentum nulla quis dictum. Cras blandit purus leo, eget gravida arcu hendrerit ac. Vivamus tempus commodo urna vel pharetra. Ut blandit, nunc et sagittis tempus, justo leo egestas neque, eu sagittis purus arcu eget tortor.</p>
            {
                noDupes.length > 0 ? <ResultList></ResultList> : null
            }
        </div>
    );
};

export default PuzzleSection;