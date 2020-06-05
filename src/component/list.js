import React, { useState } from 'react';
import styles from './css/list.css';
import { StepProvider } from './hook';

const List = ({ children }) => {
  return (
    <StepProvider>
      <div className={styles.list}>
        {children}
      </div>
    </StepProvider>
  )
}

export default List;