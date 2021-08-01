import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
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
 
      <ExpensesList filteredYear={filteredYear} expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;