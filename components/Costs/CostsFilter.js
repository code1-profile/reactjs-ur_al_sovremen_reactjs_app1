import "./CostsFilter.css";

const CostsFilter = (props) => {

  const years = [];
  const setYear = () => {
    for(let i = 2019; i < 2025; i++){
      years[ i ] = i;
    }
  }
  setYear();

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          {years.reverse().map((year) => (
            <option 
              key={year}
              value = {year}
            >{year}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
