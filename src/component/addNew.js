import "./activityItem.css";

const NewItem = () => {
  return (
    <div>
      <form className='container'>
        <div className='activity1'>
          <div>
            <label>Activity</label>
            <div>
              <input className='box' type='text'></input>
            </div>
          </div>
        </div>

        <div>
          <div>
            <label>Hours</label>
            <div className='box'>
              <input className='box' type='number'></input>
            </div>
          </div>
        </div>

        <div>
          <div>
            <label>Date</label>
            <div>
              <input className='box' type='date'></input>
            </div>
          </div>
        </div>
        <div></div>

        <button onclick={NewItem} className='button1'>
          Add Expense
        </button>
      </form>
    </div>
  );
};
export default NewItem;
