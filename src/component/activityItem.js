import "./component.css";
import Date from "./date";
import Card from "./Card";
import { useState } from "react";

function ActivityItem(props) {
  const [activity, setActivity]= useState(props.activity)
  const clickHandler =()=>{setActivity('Updated!');console.log(activity)}
  return (
    <Card className='threeInContainer'>
      
      <Date date={props.date} />
      <div className='activity'>{activity}</div>
      <div className='dateTime time'>{props.hours}hrs</div>
      <button onClick={clickHandler}>change</button>
    </Card>
  );
}

export default ActivityItem;
