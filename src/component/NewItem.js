import { useState } from "react";
import "./component.css";

const NewItem = props => {
  const [enteredActivity, setActivity] = useState("");
  const ActivityClick = event => {
    console.log(event.target.value);
    setActivity(event.target.value);
  };

  const [enteredHour, setHour] = useState("");
  const HoursClick = event => {
    console.log(event.target.value);
    setHour(event.target.value);
  };

  const [enteredDate, setDate] = useState("");
  const DateClick = event => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const Submit = event => {
    event.preventDefault();
    const Data1 = {
      d1: enteredActivity,
      d2: enteredHour,
      d3: new Date(enteredDate),
    };

    const demo = props.onDatas(Data1);
    console.log(demo);

    // console.log(Data1);
    setActivity("");
    setHour("");
    setDate("");
    // console.log('act:'+enteredActivity +
    // ',hr' +enteredHour+',dt'+ enteredDate);
  };

  return (
    <div>
      <form onSubmit={Submit} className='container'>
        <div className='activity1'>
          <div>
            <label>Activity</label>
            <div>
              <input
                className='box'
                type='text'
                onChange={ActivityClick}
                value={enteredActivity}
              ></input>
            </div>
          </div>
        </div>

        <div>
          <div>
            <label>Hours</label>
            <div className='box'>
              <input
                className='box'
                type='text'
                value={enteredHour}
                onChange={HoursClick}
              ></input>
            </div>
          </div>
        </div>

        <div>
          <div>
            <label>Date</label>
            <div>
              <input
                className='box'
                value={enteredDate}
                type='date'
                onChange={DateClick}
              ></input>
            </div>
          </div>
        </div>

        <div></div>

        <button type='submit' className='button1'>
          Add Expense
        </button>
      </form>
    </div>
  );
};
export default NewItem;
