import React, { Component } from 'react';
import getMockText from '../text.service';
import './FileZone.css';

class FileZone extends Component {
    constructor(){
        super();
        this.state = {
            results:'',
        }
    }
    componentDidMount() {
        getMockText()
            .then(results => this.setState({results}))
            .catch(err=> console.log('ERR: ',err))
    }
    render() {
        return (
            <div id="file-zone">
                <div id="file">
                    <p>{ '' || this.state.results}</p>
                </div>
            </div>
        );
    }
}

export default FileZone;
