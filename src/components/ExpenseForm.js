// ExpenseForm.js

import React, { useState } from 'react';

const ExpenseForm = ({ onSave, onCancel, expense }) => {
  const [title, setTitle] = useState(expense ? expense.title : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: +amount,
    };
    onSave(newExpense);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">{expense ? 'Update Expense' : 'Add Expense'}</button>
      {expense && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default ExpenseForm;
