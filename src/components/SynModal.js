import React from 'react';
import './SynModal.css';

const SynModal = (props) => {
  return (
  <div className="popup">
    <h3>Change it for a synonym:</h3>
    {props.synList.map(syn=> <span onClick={() => props.onClick(syn.word)}> {syn.word} </span> )}
    
  </div>);
}
export default SynModal;