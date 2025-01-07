import React, { createContext, useState, useContext } from 'react';

// Create context for purchase history
const PurchaseHistoryContext = createContext();

export const usePurchaseHistory = () => useContext(PurchaseHistoryContext);

export const PurchaseHistoryProvider = ({ children }) => {
  const [purchaseHistory, setPurchaseHistory] = useState(
    JSON.parse(localStorage.getItem('purchaseHistory')) || []
  );

  const addPurchase = (products) => {
    const newHistory = [...purchaseHistory, { date: new Date().toLocaleString(), products }];
    setPurchaseHistory(newHistory);
    localStorage.setItem('purchaseHistory', JSON.stringify(newHistory));
  };

  return (
    <PurchaseHistoryContext.Provider value={{ purchaseHistory, addPurchase }}>
      {children}
    </PurchaseHistoryContext.Provider>
  );
};
