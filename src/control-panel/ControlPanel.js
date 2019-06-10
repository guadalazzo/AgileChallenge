import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" onClick={() => onClick('bold')}  type="button"><b>B</b></button>
                    <button className="format-action" onClick={() => onClick('italic')} type="button"><i>I</i></button>
                    <button className="format-action" onClick={() => onClick('underline')} type="button"><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
