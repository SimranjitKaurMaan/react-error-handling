import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
        <Hello name={this.state.name} />
        </ErrorBoundary>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
