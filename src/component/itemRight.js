import React from 'react'

import styles from './css/item.css';

const ItemRight = ({ children }) => (
  <div className={styles["item-right"]}>
    {children}
  </div>
)

export default ItemRight;