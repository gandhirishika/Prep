import { useState } from 'react';
import './App.css';
import List from './List';
import { data } from './utils/constant';
function App() {
  const [people,setPeople]= useState(data);
  return (
    <div className="bg-pink-500 h-full w-fit rounded-lg shadow-lg m-10">
      <h1> {people.length} Birthday Today</h1>
      <List people={people}/>
      <button onClick={()=>{setPeople([])}}>ClearAll</button>
    </div>
  );
}

export default App;
