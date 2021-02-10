import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'; 
// JS modules

const App = () => {
  return (
    <>
    <h1>
      Hello React!!!
    </h1>

    <Greeting name="Karly"/>
    <Greeting name="Mike"/>
    <Greeting name="Rod"/>
    <Greeting name="Brandon"/>
  </>
  );
}

export default App;
