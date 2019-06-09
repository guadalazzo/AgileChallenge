import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    render() {
        const createMarkup = text => ({ __html: text });

        return (
            <div id="file-zone">
                <div id="file">
                {this.props.results.map((word, index) => 
                    <span key={`${word}at${index}`} dangerouslySetInnerHTML={createMarkup(word)} value={word} onDoubleClick={(e) => this.props.onDoubleClick(e, index)}></span>)
                }
                </div>
            </div>
        );
    }
}

export default FileZone;
