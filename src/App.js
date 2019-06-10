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
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }
    componentDidMount() {
        getMockText()
            .then(res => {
                const results = res.split(/(\s+)/);
                const wordsList = results.map((word, index) => ({
                    text: word,
                    index,
                }))
                this.setState({results: wordsList});
            })
            .catch(err=> console.log('ERR: ',err))
    }
    handleClick(type) {
        const { text, index } = this.state.selectedWord;
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
