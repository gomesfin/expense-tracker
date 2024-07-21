// ExpenseItem.js

import React from 'react';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const { id, title, amount } = expense;

  return (
    <div className="expense-item">
      <span>{title}</span>
      <span>${amount}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  );
};

export default ExpenseItem;
