import React from "react";
import "./ExpenseItem.css";


export default function ExpenseItem()
{
    const itemDate = new Date(2021, 5, 15);
    const itemTitle = 'Bills';
    const itemAmount = 284.12;

    return (
        <div className="expense-item">
            <div>
                {itemDate.toISOString()}
            </div>
            <div className="expense-item_description">
                <h2>{itemTitle}</h2>
                <div className="expense-item_price">{itemAmount}</div>
            </div>
        </div>
    );
}