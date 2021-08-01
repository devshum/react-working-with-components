import { useState } from 'react';
import ExpenseItem from'../Expenses/ExpensesItem/ExpenseItem';
import ExpensesFilter from './ExpenseFilter/ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterDateHandler = selectedYear => {
    const selectedYearData = selectedYear;

    setFilteredYear(selectedYearData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={saveFilterDateHandler} />
 
      { props.expenses.map((expense, index) => <ExpenseItem key={index}
                                                            date={expense.date}
                                                            title={expense.title} 
                                                            amount={expense.amount} />) }
    </Card>
  );
};

export default Expenses;