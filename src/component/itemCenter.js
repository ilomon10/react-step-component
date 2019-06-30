import React from 'react'
import PropTypes from 'prop-types'

import styles from './css/item.css';

const ItemCenter = ({ size, content }) => (
  <div className={styles["item-center"]}>
    <div className={`${styles["item-center-icon"]} ${size === 'sm' ? styles['item-center-icon-sm'] : ''}`}>
      <div className={styles["item-center-icon-content"]}>
        {content}
      </div>
    </div>
  </div>
)

ItemCenter.defaultProps = {
  size: 'lg',
  state: 'waiting',
  content: ''
}

ItemCenter.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'lg'
  ]),
  content: PropTypes.node,
}

export default ItemCenter;