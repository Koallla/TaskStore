import React, { Component } from 'react';
import Cardlist from '../CardList/CardList';
import styles from './app.module.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <Cardlist />
      </div>
    );
  }
}
