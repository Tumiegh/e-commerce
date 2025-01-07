import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context for purchase history
const PurchaseHistoryContext = createContext();

export const usePurchaseHistory = () => useContext(PurchaseHistoryContext);

export const PurchaseHistoryProvider = ({ children }) => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    setPurchaseHistory(storedHistory);
  }, []);

  const addPurchase = (products) => {
    const newPurchase = { date: new Date().toISOString(), products };
    const updatedHistory = [...purchaseHistory, newPurchase];
    setPurchaseHistory(updatedHistory);
    localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));
  };

  return (
    <PurchaseHistoryContext.Provider value={{ purchaseHistory, addPurchase }}>
      {children}
    </PurchaseHistoryContext.Provider>
  );
};

