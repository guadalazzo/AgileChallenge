import React from 'react';
import './SynModal.css';

const SynModal = (props) => {
  return props.synList.length > 0 ? (
  <div className="popup">
    <h3>Change it for a synonym:</h3>
    {props.synList.map(syn=> <span key={`a-${syn.word}`} onClick={() => props.onClick(syn.word)}> {syn.word} </span> )}
    
  </div>): (<div className="popup"><h4>No synonyms were found</h4></div>);
}
export default SynModal;