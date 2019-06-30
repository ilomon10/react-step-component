import React from 'react'
import PropTypes from 'prop-types'

import Left from './itemLeft'
import Right from './itemRight'
import Center from './itemCenter'

import styles from './css/item.css';

export { default as Left } from './itemLeft'
export { default as Right } from './itemRight'
export { default as Center } from './itemCenter'

export const Wrapper = ({ children, end, state }) => (
  <div className={`${styles.item} ${end ? styles["item--end"] : ''} ${['pending', 'waiting', 'done'].indexOf(state) != -1 ? styles[`item--${state}`] : ''}`}>
    {children}
  </div>
)

Wrapper.defaultProps = {
  state: '',
  end: false,
}

Wrapper.propTypes = {
  end: PropTypes.bool,
  state: PropTypes.oneOf([
    'pending',
    'waiting',
    'done',
  ])
}

export default {
  Wrapper,
  Left,
  Right,
  Center
};