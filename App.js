import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import React, {useState} from 'react';

const INITIAL_COSTS = [
  {  id: 1, date : new Date(2021,2,12), description : 'Холодильник', amount : '999.98' },
  {  id: 2, date : new Date(2021,11,25), description : 'Чайник', amount : '45.04' },
  {  id: 3, date : new Date(2021,3,1), description : 'Ноутбук', amount : '2500' },
];

const App = ()=> {
  
  const [costs,setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = ( cost ) => {
    //setCosts([ cost, ...costs  ]); //новый элемент станет первым
    //обновление состояния, которое основано на предыдущем состоянии - это нужно из-за вероятных задержек
    setCosts(prevCosts => {
      return [cost,...prevCosts]
    })

  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs} />
    </div>
  );
}

export default App;
