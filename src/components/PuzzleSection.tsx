import * as React from 'react';

import '../styles/puzzle-section.css';

interface myProps {

}

interface myState {
    object1: string[];
    object2: string[];
    noDupes: string[];
    sorted: boolean;
}



class PuzzleSection extends React.Component<myProps, myState> {
    public readonly state: myState = {
        noDupes: [],
        sorted: false,
        object1: ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"],
        object2: ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"]
    }
    
    curate = () => {
        [...this.state.object1, ...this.state.object2].map((item, index) => (
            this.state.noDupes === null ? this.setState({noDupes: [item]}) :
            (!this.state.noDupes.includes(item) ? 
                this.state.noDupes.push(item) : null)
            )
        )
        this.setState({noDupes: this.state.noDupes, sorted: true})
    }

    showResults = () => {
        document.getElementById("result-list")?.scrollIntoView({behavior: "smooth"});
    }
    
    ResultList: React.FC = () => {
        return (
            <ul id="result-list">
            {
                this.state.noDupes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            </ul>
        )
    };
    
    render() {
        return (
            <div className="puzzle-section">
                <h1><span className="gilded">Heading</span> One</h1>
                <p>Lorem ipsum dolor sit <button className="puzzle-button" onClick={this.state.noDupes.length === 0 ? this.curate : this.showResults }>amet,</button> consectetur adipiscing elit. Nulla ultricies, orci sed ullamcorper molestie, elit est bibendum risus, sit amet mollis tellus massa ut augue. Proin vehicula tempus dolor, nec mollis nibh. Quisque gravida condimentum nulla quis dictum. Cras blandit purus leo, eget gravida arcu hendrerit ac. Vivamus tempus commodo urna vel pharetra. Ut blandit, nunc et sagittis tempus, justo leo egestas neque, eu sagittis purus arcu eget tortor.</p>
                {
                    this.state.noDupes.length > 0 ? <this.ResultList></this.ResultList> : null
                }
            </div>
        );
    };
}

export default PuzzleSection;