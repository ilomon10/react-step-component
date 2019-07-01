import React from 'react'
import PropTypes from 'prop-types'

import styles from './css/item.css';

export const Wrapper = ({ children, end, state }) => (
  <div className={`${styles.item} ${end ? styles["item--end"] : ''} ${['pending', 'waiting', 'done'].indexOf(state) != -1 ? styles[`item--${state}`] : ''}`}>
    {children}
  </div>
)

Wrapper.defaultProps = {
  state: undefined,
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

export default Wrapper