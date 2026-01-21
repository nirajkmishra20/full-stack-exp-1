import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  const filteredExpenses = filter
    ? expenses.filter((e) =>
        e.category.toLowerCase().includes(filter.toLowerCase())
      )
    : expenses;

  const total = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="container">
      <h1>Personal Expense Tracker</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <Filter selected={filter} onChange={setFilter} />

      <h3>Total: ₹{total}</h3>

      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
