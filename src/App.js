import Component from "./component/component";
import './App.css'

function App() {
  const A='Activities Log';
  
  return (
    <div className="appDiv">
        <h1 className="title1" style={{color: 'black'}}>{A}</h1>
        <Component/>
    </div>
  );
}

export default App;
