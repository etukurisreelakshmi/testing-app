import React from 'react';
import Counter from './Counter';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={userInput:''}
    }
    inputChangeHandler=(event)=>{
        this.setState({userInput:event.target.value});
    };

    render(){
        return(
            <div>
                <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Counter inputLength={this.state.userInput.length}/>
            </div>
        )
    }
}

export default App;
