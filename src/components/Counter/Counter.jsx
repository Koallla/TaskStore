import React, { Component } from 'react';
import styles from './counter.module.css';

// eslint-disable-next-line react/prop-types

export default class Counter extends Component {
  state = {
    count: 1,
  };

  handleIncrement = e => {
    // eslint-disable-next-line no-unused-expressions
    e.target.name === '+'
      ? this.setState(prevState => ({
          count: prevState.count + 1,
        }))
      : this.setState(prevState => ({
          count: prevState.count - 1,
        }));
  };

  render() {
    const { count } = this.state;
    const btnDisable = count === 1;

    return (
      <div className={styles.container}>
        <button
          id="decrement"
          name="-"
          type="button"
          className={
            !btnDisable ? styles.onDecrementEnable : styles.onDecrementDisabled
          }
          onClick={this.handleIncrement}
          disabled={btnDisable}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          id="increment"
          name="+"
          type="button"
          className={styles.increment}
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}
