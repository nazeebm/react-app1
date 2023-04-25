import Data from "./Data";

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
        <div>
            <Data objects={objects}/>
        </div>
    )
}

export default Activities;