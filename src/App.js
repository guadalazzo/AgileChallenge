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
        }
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
    handleClick() {

    }
    handleDoubleClick(e, index) {
        console.log('selected:',e.target.textContent);
        console.log('results:', this.state.results);
        const indexTarget = index;
        console.log('index target',indexTarget);
        const newResult = this.state.results.splice(indexTarget,1, `<b>${e.target.textContent}</b>`);
        console.log(newResult);
        console.log(this.state.results);
        this.setState({results:this.state.results});
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
