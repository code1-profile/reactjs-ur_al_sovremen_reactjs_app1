import Card from '../Ui/Card';
import './CostItem.css';
import CostList from './CostList';
import CostsFilter from './CostsFilter'
import React,{useState} from 'react';

const Costs = (props) => {
  
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandlerSomeText = (year) => {
    setSelectedYear(year);
  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  })

  

	return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandlerSomeText}/>
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  );
}


export default Costs;