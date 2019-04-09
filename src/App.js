// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;



import React from "react";
import { connect } from "react-redux";
import { incrementOne, decrementOne, resetCounter } from "./redux/actions";

class Counter extends React.Component {

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <button className="add-todo" onClick={() => { this.props.decrementOne(1) }}>
          -
        </button>
        <div style={{ padding: '10px', margin: '10px' }}>counter:{" " + this.props.counter}</div>
        <button className="add-todo" onClick={() => { this.props.incrementOne(1) }}>
          +
        </button>
        <button style={{ display: "block", padding: '10px', margin: '10px' }} onClick={this.props.resetCounter}>reset</button>
      </div>
    );
  }
}

// start of code change
const mapStateToProps = (state) => {
  return { counter: state.counterReducer.counter || 0 };
};

export default connect(
  mapStateToProps,
  { incrementOne, decrementOne, resetCounter }
)(Counter);

