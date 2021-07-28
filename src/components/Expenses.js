
import ExpenseItem from'./ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      { props.expenses.map((expense, index) => <ExpenseItem key={index}
                                                            date={expense.date}
                                                            title={expense.title} 
                                                            amount={expense.amount} />) }
    </div>
  );
};

export default Expenses;