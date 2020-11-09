import React, { Component } from 'react';
import styles from './app.module.css';

export default class App extends Component {
  componentDidMount() {
    console.log('Hello');
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Hello bro</h1>
      </div>
    );
  }
}
