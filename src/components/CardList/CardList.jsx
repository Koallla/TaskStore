/* eslint-disable react/prop-types */
import React from 'react';
import CardlistItem from '../CardListItem/CardListItem';
import styles from './cardList.module.css';

const Cardlist = () => {
  return (
    <ul className={styles.list}>
      <CardlistItem className="main_photo" />
      <CardlistItem className="main_photo_1" />
      <CardlistItem className="main_photo_2" />
    </ul>
  );
};

export default Cardlist;
