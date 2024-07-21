// ExpenseList.js

import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ExpenseList;
