import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(oldState => ({count: oldState.count + 1}))
    // this.setState({count: 73})
  }

  UNSAFE_componentWillMount = () => {
    console.log('Before mounting in Browser');
  }

  componentDidMount = () => {
    console.log('After mounting in Browser');
  }

  UNSAFE_componentWillUpdate = () => {
    console.log('Before mounting an updated component in Browser');
  }

  componentDidUpdate = () => {
    console.log('After mounting an updated component in Browser');
  }

  componentWillUnmount = () => {
    console.log('Before deleting the component');
  }

  shouldComponentUpdate = (newProps, newState) => {
    if (newState.count !== this.state.count) {
      return true
    } else { 
      return false
    }
  }

  render() {
    console.log('Mount');
    return (
      <div>
        <p>{this.state.count}</p>
        <input type='button' value='increment' onClick={this.onIncrement}></input>
      </div>
    )
  }
}

class App extends React.Component {
  state = {showCounter: true}

  onToggleCounter = () => {
    this.setState(oldState => ({showCounter: !oldState.showCounter}))
  }

  render() {
    const counter = this.state.showCounter? <Counter /> : null;

    return (
      <div>
        {counter}
        <input type='button' value='Toggle counter' onClick={this.onToggleCounter}></input>
      </div>
    )
  }
}
 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
