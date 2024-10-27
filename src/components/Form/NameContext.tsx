import React, { createContext, useState, ReactNode, useContext } from "react";

interface DataContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [name, setName] = useState("Bhaktiaji Ilham");

  return (
    <DataContext.Provider value={{ name, setName }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};