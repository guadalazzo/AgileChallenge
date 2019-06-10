import React from 'react';
import './SynModal.css';

const SynModal = (props) => {
  console.log(props);
  return <div className="popup">{props.synList.map(syn=> <p> {syn.word} </p> )}</div>
  //  return <ul> {props.synList.map(syn => <li>{syn}</li>)}</ul>
}
export default SynModal;