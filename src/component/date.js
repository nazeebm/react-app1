import "./activityItem.css";
function Date(props) {
    
const day=props.date.toLocaleString('en-US',{day:'2-digit'});
const month=props.date.toLocaleString('en-US',{month:'long'});
const year=props.date.getFullYear();

 return (
    <div className='dateTime date'>
            {day} {month} {year}</div>
            
    );
}
export default Date;