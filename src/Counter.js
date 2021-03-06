import { render } from '@testing-library/react';
import React from 'react';

class Counter extends React.Component {

 // We move the state to the App.js because it is a parent component

 //   state = {
 //       count: 0
 //   };

 //   increment = () => {
 //       this.setState({
 //           count: this.state.count + 1
 //       });
 //   };

 //   decrement = () => {
 //       this.setState({
 //           count: this.state.count - 1
 //       });
 //   };

render() {
    return (
        <div>
          {/* Instead of getting the values from state, we get it from props 
          <div>count: {this.state.count}</div>
          <button onClick={this.state.increment}>increment</button>
          <button onClick={this.state.decrement}>decrement</button>
          </div> 
          */}
          <div>count: {this.props.count}</div>
          <button onClick={this.props.increment}>increment</button>
          <button onClick={this.props.decrement}>decrement</button>
        </div> 
    );
  } 
}

export default Counter;