import * as React from 'react';
import { useState } from 'react';

import '../styles/puzzle-section.css';

interface myProps {

}

interface myState {
    object1: string[];
    object2: string[];
    noDupes: string[];
}

class PuzzleSection extends React.Component<myProps, myState> {
    constructor(props: any) {
        super(props);
        this.setState({
            noDupes: [''],
            object1: ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"],
            object2: ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"]
        });
    }
    
    curate(): void {
        console.log("curate began");
        [...this.state.object1, ...this.state.object2].map((item, index) => (
            this.state.noDupes === null ? this.setState({noDupes: [item]}) :
            (!this.state.noDupes.includes(item) ? 
                this.state.noDupes.push(item) : null)
            )
        )
        this.setState({noDupes: this.state.noDupes})
    }
    
    ResultList: React.FC = () => {
        return (
            <div>
                <ul>
                {
                    this.state.noDupes.map((item) => (
                        <li>{item}</li>
                    ))
                }
                </ul>
            </div>
        )
    };
    
    render() {
        return (
            <div className="puzzle-section">
                <h1><span className="gilded">Heading</span> One</h1>
                <p>Lorem ipsum dolor sit <button onClick={this.curate}>amet,</button> consectetur adipiscing elit. Nulla ultricies, orci sed ullamcorper molestie, elit est bibendum risus, sit amet mollis tellus massa ut augue. Proin vehicula tempus dolor, nec mollis nibh. Quisque gravida condimentum nulla quis dictum. Cras blandit purus leo, eget gravida arcu hendrerit ac. Vivamus tempus commodo urna vel pharetra. Ut blandit, nunc et sagittis tempus, justo leo egestas neque, eu sagittis purus arcu eget tortor.</p>
                {/* {
                    this.state.noDupes !== null ?
                    (this.state.noDupes.length > 0 ? <this.ResultList></this.ResultList> : null) : null
                } */}
            </div>
        );
    };
}

export default PuzzleSection;