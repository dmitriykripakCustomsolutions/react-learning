import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');

    const FilterByYearHandler = (year) => {
        setFilteredYear(year);
        console.log(year);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onByYearHandler={FilterByYearHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;