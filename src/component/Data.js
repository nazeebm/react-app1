import Card from "./Card";
import ActivityItem from "./activityItem";

const Data=(props)=>{

    return (
        <Card className='card'>
        {props.objects.map(
                                x => 
                                    <ActivityItem 
                                        date={x.date}
                                        activity={x.activity}
                                        hours={x.hours}
                                    ></ActivityItem>
                            )
        }
        </Card>
    )    
}

export default Data;