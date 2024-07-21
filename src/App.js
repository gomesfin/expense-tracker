// App.js

import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Groceries', amount: 50 },
    { id: 2, title: 'Utilities', amount: 100 },
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    exitEditMode();
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditMode(true);
    setEditId(id);
    // Prefill form with existing data
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editId ? { ...expense, ...updatedExpense } : expense
    );
    setExpenses(updatedExpenses);
    exitEditMode();
  };

  const exitEditMode = () => {
    setEditMode(false);
    setEditId(null);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseSummary expenses={expenses} />
      <ExpenseForm onSave={editMode ? updateExpense : addExpense} onCancel={exitEditMode} expense={editMode ? expenses.find((e) => e.id === editId) : null} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={editExpense} />
    </div>
  );
};

export default App;
