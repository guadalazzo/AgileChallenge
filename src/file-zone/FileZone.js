import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    render() {

        return (
            <div id="file-zone">
                <div id="file">
                {this.props.results.map((result, index) =>     
                        <span 
                            className={`${result.bold ? 'bold ':''}${result.italic ? ' italic':''}${result.underline ? ' underline':''}`}
                            key={`${result.text}at${index}`} 
                            onDoubleClick={(e) => this.props.onDoubleClick(e, index)}>
                            {result.text}
                        </span>
                    )
                }
                </div>
            </div>
        );
    }
}

export default FileZone;
