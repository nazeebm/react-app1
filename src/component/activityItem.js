import "./component.css";
import Date from "./date";
import Card from "./Card";

function ActivityItem(props) {

  return (
    <Card className='threeInContainer'>
      <Date date={props.date} />
      <div className='activity'>{props.activity}</div>
      <div className='dateTime time'>{props.hours}hrs</div>
    </Card>
  );
}

export default ActivityItem;
