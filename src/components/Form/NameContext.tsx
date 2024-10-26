import React, { createContext, useContext, useState } from 'react';

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

export const NameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};
