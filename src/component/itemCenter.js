import React from 'react'
import PropTypes from 'prop-types'

import styles from './item.css';

const ItemCenter = ({ size }) => (
  <div className={styles["item-center"]}>
    <div className={`${styles["item-center-icon"]} ${size === 'sm' ? styles['item-center-icon-sm'] : ''}`}></div>
  </div>
)

ItemCenter.defaultProps = {
  size: 'lg',
  state: 'waiting'
}

ItemCenter.propTypes = {
  size: PropTypes.oneOf([ 
    'sm',
    'lg'
  ]),
  state: PropTypes.oneOf([
    'waiting',
    'progress',
    'done'
  ])
}

export default ItemCenter;