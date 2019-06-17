import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import SynModal from "./components/SynModal";
import getMockText from './text.service';
import getSynonym from './syn.service';

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            results: [],
            selectedWord: {
                index: null,
                text:'',
                synList: [],
            }
        }
        this.getSyn = this.getSyn.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.changeWord = this.changeWord.bind(this);

    }
    componentDidMount() {
       
        getMockText()
            .then(res => {
                const results = res.split(/(\s+)/);
                const wordsList = results.map((word, index) => ({
                    text: word,
                    index,
                }))
                // If has no localStorage info, take the service results
                localStorage.getItem('words') && JSON.parse(localStorage.getItem('words')).length > 0 ? 
                this.setState({results: JSON.parse(localStorage.getItem('words'))}) : 
                this.setState({results: wordsList});
            })
            .catch(err=> console.log('ERR on Initial render: ',err))
    }
    getSyn(word) { // It brings the array of synonyms 
         getSynonym(word)
        .then(res => this.setState({selectedWord:{...this.state.selectedWord, synList: res.data}}))
        .catch(err => console.log('ERR charging synonyms: ',err));
    }
    
    handleClick(type) {
        const { text, index } = this.state.selectedWord;
        // it handles the word style type, after that it change the results array with the new type
        if (this.state.selectedWord.index !== null) {
            if (type === 'bold') {
                this.state.results[index].bold = !this.state.results[index].bold;
            }
            if (type === 'italic') {
                this.state.results[index].italic = !this.state.results[index].italic;
            }
            if (type === 'underline') {
                this.state.results[index].underline = !this.state.results[index].underline;
            }
            this.setState({results: this.state.results});
            this.setLocalStorage(this.state.results)

        }
    }
    handleDoubleClick(e, index) {
        // brings the synonyms list to the state, also get the selected word
        this.setState({selectedWord:{index: index, text:e.target.textContent, synList: this.getSyn(e.target.textContent)}});
    }
    setLocalStorage(results){
        // set de storage info
        localStorage.setItem('words', JSON.stringify(results));
    }
    changeWord(word) {
        // change the word selected for the synonym
        this.state.results[this.state.selectedWord.index].text = word;
        this.setState({results: this.state.results})
        this.setLocalStorage(this.state.results)
    }
    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                   {this.state.selectedWord.synList && <SynModal synList={this.state.selectedWord.synList} onClick={this.changeWord}/>} 
                    <ControlPanel onClick={this.handleClick}/>
                    <FileZone getRef={this.getRef} results={this.state.results} onDoubleClick={this.handleDoubleClick}/>
                </main>
            </div>
        );
    }
}

export default App;
