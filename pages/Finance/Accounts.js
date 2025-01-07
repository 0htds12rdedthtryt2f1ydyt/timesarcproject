import React, { useState } from 'react';

const Accounts = () => {
  // State hooks to manage the input values
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [assets, setAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);

  // Calculate the Net Worth
  const netWorth = (assets - liabilities);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="account-summary">
      <h1>Account Summary</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Income:</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label>Expenses:</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label>Assets:</label>
          <input
            type="number"
            value={assets}
            onChange={(e) => setAssets(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label>Liabilities:</label>
          <input
            type="number"
            value={liabilities}
            onChange={(e) => setLiabilities(parseFloat(e.target.value))}
          />
        </div>

        <button type="submit">Update Summary</button>
      </form>

      <div className="summary">
        <h2>Summary</h2>
        <p><strong>Income:</strong> ${income}</p>
        <p><strong>Expenses:</strong> ${expenses}</p>
        <p><strong>Assets:</strong> ${assets}</p>
        <p><strong>Liabilities:</strong> ${liabilities}</p>
        <p><strong>Net Worth:</strong> ${netWorth}</p>
      </div>
    </div>
  );
};

export default Accounts;
