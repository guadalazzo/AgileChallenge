import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            results: [],
            selectedWord: {
                index: null,
                text:'',
                modifiers:[
                {bold: false},
                {italic: false},
                {underline: false},
                ]
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }
    componentDidMount() {
        getMockText()
            .then(res => {
                const results = res.split(/(\s+)/);
                this.setState({results})
            })
            .catch(err=> console.log('ERR: ',err))
    }
    handleClick(e) {
        const { text, index } = this.state.selectedWord;
        console.log(this.state.selectedWord.modifiers.bold);
        const { bold, italic, underline } = this.state.selectedWord.modifiers;
        if (this.state.selectedWord.index !== null) {
            if (e.target.value === 'bold') {
                this.setState(prevState => ({selectedWord:{ modifiers : [...{bold:!prevState.selectedWord.bold}]}}));
                const replaceHtml = `<b>${text}</b>`;
                this.state.results.splice(this.state.selectedWord.index,1, replaceHtml);
            }
            console.log(e.target.value);
            this.setState({results:this.state.results});
        }
        
    }
    handleDoubleClick(e, index) {
        console.log(e.target.textContent);
        this.setState({selectedWord:{index: index,text:e.target.textContent}});
        
    }
    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel onClick={this.handleClick}/>
                    <FileZone results={this.state.results} onDoubleClick={this.handleDoubleClick}/>
                </main>
            </div>
        );
    }
}

export default App;
