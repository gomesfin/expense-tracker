// ExpenseSummary.js

import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${total}</p>
    </div>
  );
};

export default ExpenseSummary;
