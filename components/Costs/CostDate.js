import './CostDate.css';

const CostDate = (props) => {
	return (
    <div className='cost-date'>
			<div className='cost-date__month'>{props.date.getMonth()}</div>
			<div className='cost-date__year'>{props.date.getFullYear()}</div>
			<div className='cost-date__day'>{props.date.getDate()}</div>
		</div>
  );
}


export default CostDate;