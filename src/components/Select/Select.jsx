import React, { Component } from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import style from './select.module.css';

const colourOptions = [
  { value: 'Желтый', label: 'Желтый', color: '#FFC400' },
  { value: 'Красный', label: 'Красный', color: '#ff1717' },
  { value: 'Зеленый', label: 'Зеленый', color: '#36B37E' },
  { value: 'Синий', label: 'Синий', color: '#0008ff' },
  { value: 'Черный', label: 'Черный', color: '#000000' },
];

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    width: '260px',
    flexWrap: 'inherit',
    height: '30px',
    minHeight: '30px',
    borderRadius: '20px',
    borderStyle: 'none',
    borderWidth: 'none',
    outline: 'none',
    margin: '0px',
    boxShadow: 'none',
  }),
  menu: styles => ({
    ...styles,
    borderStyle: 'none',
    borderWidth: 'none',
    outline: 'none',
    margin: '0px',
    boxShadow: 'none',
    borderRadius: '20px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      borderRadius: '20px',
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },

  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({
    ...styles,
    ...dot(),
    color: 'black',
    fontSize: '12px',
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
  }),
};

// eslint-disable-next-line no-return-assign
export default class App extends Component {
  state = {
    selectedOption: null,
    isOpen: false,
  };

  handleChange = color => {
    this.setState({ selectedOption: color });
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { selectedOption, isOpen } = this.state;

    return (
      <div
        className={style.select_container}
        onMouseEnter={() => {
          this.toggle();
        }}
        onMouseLeave={() => {
          this.toggle();
        }}
      >
        <Select
          className={style.selectCustom}
          value={selectedOption}
          onChange={this.handleChange}
          options={colourOptions}
          placeholder="Цвет"
          styles={colourStyles}
          menuIsOpen={isOpen}
          maxMenuHeight={110}
          overflowY="hidden"
        />
      </div>
    );
  }
}
