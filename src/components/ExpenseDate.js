import './ExpenseDate.css'

function ExpenseDate(props) {
	let month = props.date.toLocaleString('en-US', { month: 'long' })
	let day = props.date.toLocaleString('en-US', { day: '2-digit' })
	let year = props.date.getFullYear()
	console.log(month)
	let newYear = 2022
	let years = newYear - year

	if (years === 0) {
		return (
			<div className='expense-date'>
				<div className='expense-date__month'>{month}</div>
				<div className='expense-date__day'>{day}</div>
				<div className='expense-date__year'>{year}</div>
			</div>
		)
	} else {
		return (
			<div className='expense-date'>
				<div className='expense-date__month'>{month}</div>
				<div className='expense-date__day'>{day}</div>
				<div className='expense-date__year'>{`${years} ${'years ago'}`}</div>
			</div>
		)
	}
}

export default ExpenseDate
