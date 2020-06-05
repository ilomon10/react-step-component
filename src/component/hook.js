import React, { useState, useCallback } from 'react';

export const StepContext = React.createContext(0);

export const StepProvider = function ({ children }) {
  const [step, setStep] = useState(0);
  return (
    <StepContext.Provider value={0}>
      {children}
    </StepContext.Provider>
  )
};