import './CostForm.css'
import React, {useState} from 'react';
const CostForm = (props)=>{

	const [inputName, setInputName] = useState(""); //Т.к. когда отображается впервые, то ничего в input нет (а через inpyt придёт строка)
	const [inputAmount, setInputAmount] = useState(""); 
	const [inputDate, setInputDate] = useState(""); 

	const nameChangeHandler = (event) => { //event здесь будет по умолчанию
		setInputName(event.target.value) //компонент перезапустится
	}

	const amountChangeHandler = (event) => { 
		setInputAmount(event.target.value)
	}

	const dateChangeHandler = (event) => { 
		setInputDate(event.target.value)
	}


	const submitHandler = (event) => {
		event.preventDefault();
		const costData = {
			date: new Date(inputDate),
			description: inputName,
			amount: inputAmount,
		}

		props.onSaveCostData( costData ); //передали выше

		setInputName("")
		setInputAmount("")
		setInputDate("")
	}


	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Название</label>
					<input type='text' value={inputName} onChange={nameChangeHandler} />
				</div>
				<div className="new-cost__control">
					<label>Сумма</label>
					<input type='number' min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input type='date' min='2019-01-01' step='2022-12-31' value={inputDate} onChange={dateChangeHandler} />
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавить расход</button>
					<button type="button" onClick={props.onCancel}>Отмена</button>
				</div>
			</div>
		</form>
	);
}

export default CostForm;