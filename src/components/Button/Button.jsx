import React from 'react';
// import T from 'prop-types';
import styles from './button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ onClick }) => (
  <div className={styles.container}>
    <button className={styles.button} type="button" onClick={onClick}>
      Купить
    </button>
  </div>
);

export default Button;
