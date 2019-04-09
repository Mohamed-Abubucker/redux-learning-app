
import React from "react";
import { connect } from "react-redux";
import { incrementOne, decrementOne, resetCounter } from "./redux/actions";
import CategoryCard from './components/categoryCard';

class Counter extends React.Component {

  componentDidMount() {
    // this.props
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      // <div style={{ display: 'flex' }}>
      //   <button className="add-todo" onClick={() => { this.props.decrementOne(1) }}>
      //     -
      //   </button>
      //   <div style={{ padding: '10px', margin: '10px' }}>counter:{" " + this.props.counter}</div>
      //   <button className="add-todo" onClick={() => { this.props.incrementOne(1) }}>
      //     +
      //   </button>
      //   <button style={{ display: "block", padding: '10px', margin: '10px' }} onClick={this.props.resetCounter}>reset</button>
      // </div>
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

