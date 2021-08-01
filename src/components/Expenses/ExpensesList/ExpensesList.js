import './ExpensesList.css';
import ExpenseItem from '../ExpensesItem/ExpenseItem';

const ExpensesList = props => {
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === props.filteredYear);

  let expensesContent = <p className="expenses-list__fallback">NO expenses were found</p>;

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id}
                                                                   date={expense.date}
                                                                   title={expense.title} 
                                                                   amount={expense.amount} />
    );
  };

  return <ul className="expenses-list">{expensesContent}</ul>
};

export default ExpensesList;