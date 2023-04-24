import Card from "./Card";
import ActivityItem from "./activityItem";

function Activities() {
    var objects=[
        {date: new Date(2020, 7, 14),
        activity:'prayer',
        hours:'2'}
        ,
        {date:new Date(2020, 7, 14),
        activity:'pray',
        hours:'1'}
        ,
        {date:new Date(2020, 7, 14),
        activity:'play',
        hours:'3'}
        ,
        {date:new Date(2020, 7, 14),
        activity:'project',
        hours:'2'}
      ]

    return (
        <Card className='card'>
        <ActivityItem 
                  date={objects[0].date}
                  activity={objects[0].activity}
                  hours={objects[0].hours}
        ></ActivityItem>

        <ActivityItem 
                   date={objects[1].date}
                   activity={objects[1].activity}
                   hours={objects[1].hours}
        ></ActivityItem>

        <ActivityItem 
                   date={objects[2].date}
                   activity={objects[2].activity}
                   hours={objects[2].hours}
        ></ActivityItem>

        <ActivityItem 
                   date={objects[3].date}
                   activity={objects[3].activity}
                   hours={objects[3].hours}
        ></ActivityItem>
        </Card>
    )
}

export default Activities;