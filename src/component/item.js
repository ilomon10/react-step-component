import React from 'react'
import PropTypes from 'prop-types'

import styles from './item.css';

const Item = ({ children, end }) => (
  <div className={`${styles.item} ${ end ? styles["item-end"] : ''}`}>
    {children}
  </div>
)

Item.propTypes = {
  end: PropTypes.bool
}

export default Item;