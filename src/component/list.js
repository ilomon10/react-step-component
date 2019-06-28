import React from 'react'

import styles from './list.css';

const List = ({ children }) => (
  <div className={styles.list}>
    {children}
  </div>
)

export default List;