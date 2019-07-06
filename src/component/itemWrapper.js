import React from 'react'
import PropTypes from 'prop-types'

import styles from './css/item.css';

export const Wrapper = ({ children, end, state, style }) => (
  <div className={`${styles.item} ${end ? styles["item--end"] : ''} ${['pending', 'waiting', 'done'].indexOf(state) != -1 ? styles[`item--${state}`] : ''}`} 
    style={style}>
    {children}
  </div>
)

Wrapper.defaultProps = {
  end: false,
  state: null,
  style: undefined,
}

Wrapper.propTypes = {
  end: PropTypes.bool,
  style: PropTypes.object,
  state: PropTypes.oneOf([
    'pending',
    'waiting',
    'done',
  ])
}

export default Wrapper