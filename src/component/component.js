import NewItem from "./NewItem";
// import Activities from "./Activities";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Dummy = [
  {
    activity: "prayer",
    hours: "2",
    date: new Date(2020, 7, 14),
  },
];

const Component = props => {
                      const [Data2, setData2] = useState(Dummy);
                      const DataSaver = Data1 => {
                                                    setData2(Data3 => {
                                                                        return [Data1, ...Data3]
                                                                      })
                                                  }
              

  return (
    <div>
      <NewItem onDatas={DataSaver} />
      <ExpenseFilter Data2={Data2} />
            {/* <Activities></Activities> */}
    </div>
  );
};
export default Component;
