import NewItem from "./NewItem";
import Activities from "./Activities";
import ExpenseFilter from "./ExpenseFilter";

const Component = props => 
{
    let Data2 = [0,1];
    const DataSaver = (Data1) => 
        {
            console.log(Data1);
            Data2.push(Data1);
            console.log(Data2);
            console.log(Data2);
        };

    const OptionHandler=(event)=>{
          console.log(event.target.value)
      }

    return (
        <div>
          
          <NewItem onDatas={DataSaver} />
          <ExpenseFilter onYear={OptionHandler}/>
          <Activities></Activities>
        </div>
  );
};
export default Component;
