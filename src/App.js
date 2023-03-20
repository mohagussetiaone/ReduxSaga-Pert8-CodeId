import logo from './logo.svg';
import './App.css';
import Baca from './Baca';
import CounterArrow from './CounterArrow';
import CounterHook from './CounterHook';
import Employee from './Employee';
import Parent from './ParentChild/Parent';
import ParentClass from './ParentChildClass/ParentClass';

function App() {
  return (
    <div>
      <Baca/>
      <CounterArrow/>
      <CounterHook/>
      <Employee/>
      <Parent/>
      <ParentClass/>
    </div>
  );
}

export default App;
