import React from 'react';
import { usePurchaseHistory } from '../contexts/PurchaseHistoryContext';
import './PurchaseHistory.css';

function PurchaseHistory() {
  const { purchaseHistory } = usePurchaseHistory();

  return (
    <div className="purchase-history">
      <h2>Your Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p>No purchases found.</p>
      ) : (
        purchaseHistory.map((purchase, index) => (
          <div key={index} className="purchase">
            <p><strong>Date:</strong> {new Date(purchase.date).toLocaleDateString()}</p>
            <h3>Items Purchased:</h3>
            <ul>
              {purchase.products.map(item => (
                <li key={item.id}>
                  {item.name} - {new Intl.NumberFormat('en-ZA', {
                    style: 'currency',
                    currency: 'ZAR',
                  }).format(item.price)}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default PurchaseHistory;

