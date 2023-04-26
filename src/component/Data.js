import Card from "./Card";
import ActivityItem from "./activityItem";

const Data = prop => {
  console.log(prop.objects);
  console.log(prop.objects[0].date.getFullYear());
  console.log(prop.Year);
  return (
    <Card className='card'>
      {prop.objects
    //   .filter(y => y.date.getFullYear()===(prop.Year))
        .map(x => (
          <ActivityItem
            key={x.id}
            date={x.date}
            activity={x.activity}
            hours={x.hours}
          ></ActivityItem>
        ))}
    </Card>
  );
};

export default Data;
