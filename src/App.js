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
    <h2>
      Hello Mike!!!
    </h2>
    <h2>
      Hello Ray!!!
    </h2>
    <Greeting/>
    <Greeting/>
    <Greeting/>
    <Greeting/>
  </>
  );
}

export default App;
