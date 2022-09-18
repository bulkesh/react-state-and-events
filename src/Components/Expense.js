import ExpenseItem from "./ExpenseItem";
import data from '../utils/data.json';
import Card from "./Shared/Card";
import './Expense.css';
const Expense = () => {
    return (
        <Card className="expenses">
            <ExpenseItem date={data[0].date} title={data[0].title} amount={data[0].amount} />
            <ExpenseItem date={data[1].date} title={data[1].title} amount={data[1].amount} />
            <ExpenseItem date={data[2].date} title={data[2].title} amount={data[2].amount} />
            <ExpenseItem date={data[3].date} title={data[3].title} amount={data[3].amount} />
        </Card>
    )
}

export default Expense;