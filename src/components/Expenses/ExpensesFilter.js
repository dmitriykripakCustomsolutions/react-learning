import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

    const pickYearHandler = (event) => {
        const pickedYear = event.target.value

        props.onByYearHandler(pickedYear);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={pickYearHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;