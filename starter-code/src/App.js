import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseItem = {
    title: "Bills",
    amount: 281.2,
    date: new Date(2021, 5, 15)
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date}></ExpenseItem>
    </div>
  );
}

export default App;
