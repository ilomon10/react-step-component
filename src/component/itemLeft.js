import React from 'react'

import styles from './item.css';

const ItemLeft = ({ children }) => (
  <div className={styles["item-left"]}>
    {children}
  </div>
)

export default ItemLeft;