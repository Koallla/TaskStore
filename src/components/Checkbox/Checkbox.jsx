import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './checkbox.module.css';

export default class Checkbox extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    value: '',
  };

  handleChange = e => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor={shortid.generate()} className={styles.radio}>
            <input
              id={shortid.generate()}
              className={styles.radio}
              type="radio"
              name="subscription"
              value="100"
              onChange={this.handleChange}
            />
            <div className={styles.radio__text}>100 мл</div>
          </label>
          <label htmlFor={shortid.generate()} className={styles.radio}>
            <input
              id={shortid.generate()}
              className={styles.radio}
              type="radio"
              name="subscription"
              value="200"
              onChange={this.handleChange}
            />
            <div className={styles.radio__text}>200 мл</div>
          </label>
          <label htmlFor={shortid.generate()} className={styles.radio}>
            <input
              id={shortid.generate()}
              className={styles.radio}
              type="radio"
              name="subscription"
              value="300"
              onChange={this.handleChange}
            />
            <div className={styles.radio__text}>300 мл</div>
          </label>
        </form>
      </div>
    );
  }
}
