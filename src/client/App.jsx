import React, { Component } from 'react';
import { Chat } from './components/Chat.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello Squirtle World!</h1>
        <Chat />
      </div>
    );
  }
}

export default App;
