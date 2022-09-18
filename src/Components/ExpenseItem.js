import './ExpenseItem.css'
import Card from './Shared/Card';
import DateWidgit from './Shared/DateWidgit';
const ExpenseItem = (props) => {

    const clickHandler = (e) => {
        console.log("Click: ", e);
    }
    return (
        <Card className="expense-item">
            <DateWidgit date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!!</button>
        </Card>
    )
};

export default ExpenseItem;