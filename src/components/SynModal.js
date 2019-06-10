import React from 'react';

const SynModal = (props) => {
  console.log(props);
  return <React.Fragment>{props.synList.map(syn=> <p> {syn.word} </p> )}</React.Fragment>
  //  return <ul> {props.synList.map(syn => <li>{syn}</li>)}</ul>
}
export default SynModal;