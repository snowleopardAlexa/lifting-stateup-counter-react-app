import React from 'react';
import './App.css';
import Counter from "./Counter";

class App extends React.Component {
     state = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

  render() {
    return (
      <div className="App">
        {/* Passing down the state to the component Counter */}
        <Counter 
         count={this.state.count} 
         increment={this.increment} 
         decrement={this.decrement} 
        />
        {/* The state from parent component is used in two components and it acts in the same way */}
        <Counter 
         count={this.state.count} 
         increment={this.increment} 
         decrement={this.decrement} 
        />
      </div>
    );
  }
}

export default App;
