import './CostItem.css';
import Card from '../Ui/Card';
import CostDate from './CostDate';
import React, { useState } from "react";


const CostItem = ( props ) => { 

  return (
		<li>
			<Card className='cost-item'>
			{/* <div className='cost-item'> */}
				<CostDate date={props.date}/>
				<div className='cost-item__description'>
					<h2>{props.description}</h2>
					<div className='cost-item__price'>${props.amount}</div>
				</div>
			</Card>
		</li>
  );
}

export default CostItem;
