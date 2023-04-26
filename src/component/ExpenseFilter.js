
import Data from './Data';
import './ExpenseFilter.css';
import { useState } from 'react';



const ExpenseFilter=(props)=>

{
    const [Year,setYear]=useState('2020');
    const onYear=(event)=>{
        setYear(parseInt(event.target.value));
    }
    return(
            <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={onYear}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                </select>

            </div>
            <Data objects={props.Data2} Year={Year} />
            </div>
            );
};
  export default ExpenseFilter;
