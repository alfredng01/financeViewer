import React from "react";
import "./ExpenseItem.css";


export default function ExpenseItem(prop)
{
    const month = prop.date.toLocaleString("en-US", {month: "long"});
    const day = prop.date.toLocaleString("en-US", {day: "2-digit"});
    const year = prop.date.getFullYear();

    return (
        <div className="expense-item">
           <div>
                <div>
                    {month}
                </div>
                <div>
                    {day}
                </div>
                <div>
                    {year}
                </div>
           </div>
            <div className="expense-item_description">
                <h2>{prop.title}</h2>
                <div className="expense-item_price">{prop.amount}</div>
            </div>
        </div>
    );
}