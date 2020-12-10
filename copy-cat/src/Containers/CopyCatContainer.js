import React from 'react';
import { render } from 'react-dom';
import {CopyCat} from '../components/CopyCat/CopyCat';


export class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copying: true,
            input: ''
        }

        this.toggleTape = this.toggleTape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleTape() {
        this.setState({copying: !this.state.copying});
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    render(){
        const copying = this.state.copying;
        const toggletape = this.toggleTape
        const value = this.state.input;
        const handleChange = this.handleChange;
        return(
            <CopyCat 
                copying={copying}
                toggleTape={toggletape}
                value={value}
                handleChange={handleChange}
            />
        )
    }
}