/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Select from '../Select/Select';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import styles from './cardListItem.module.css';

export default class CardlistItem extends Component {
  state = {
    isActiv: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isActiv: !prevState.isActiv }));
  };

  render() {
    const { isActiv } = this.state;
    const { className } = this.props;
    return (
      <li className={styles.listItem}>
        <div className={styles.card}>
          <div className={styles.photo_section}>
            <div className={styles.status}>New</div>
            <div className={styles[className]} />
            <div className={styles.logo}>
              <span
                onClick={this.toggle}
                className={isActiv ? styles.logoItemActiv : styles.logoItem}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={styles.title_section}>
            <h2 className={styles.title}>Шампунь</h2>
            <span className={styles.text_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </span>
          </div>

          <div className={styles.price_section}>
            <div className={styles.selector_color}>
              <Select />
            </div>
            <span className={styles.price}>200 грн</span>
          </div>

          <div className={styles.volume}>
            <Checkbox />
          </div>
          <div className={styles.purchaise_section}>
            <Counter />
            <Button />
          </div>
        </div>
      </li>
    );
  }
}
