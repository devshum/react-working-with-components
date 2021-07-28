
import ExpenseItem from'./ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      { props.expenses.map((expense, index) => <ExpenseItem key={index}
                                                            date={expense.date}
                                                            title={expense.title} 
                                                            amount={expense.amount} />) }
    </Card>
  );
};

export default Expenses;