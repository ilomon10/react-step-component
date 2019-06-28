import React from 'react'

import styles from './item.css';

const ItemRight = ({ children }) => (
  <div className={styles["item-right"]}>
    {children}
  </div>
)

export default ItemRight;