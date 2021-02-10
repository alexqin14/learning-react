import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'; 
// JS modules

const App = () => {

  const styles = {
    container: {
      padding: 20
      , backgroundColor: new Date().getSeconds() % 2 == 0 ? "lightblue" : "pink"
    }
    // DOM css property name tenieray part three parts explicit comparison, if it's true/false 
    // "?" vs ":" pendatic not a statment, it's a expression
    , heading: {
      textTransform: "uppercase"
    }
  };
  return (
    <div
      style={styles.container}
    
    >
    <h1 style={{padding:40}}>
      Hello React!!!
    </h1>

    <Greeting name="Karly" favoriteNumber={9} favoriteColors={["Red", "Purple", "Green"]}/>
    <Greeting name="Mike" favoriteNumber={42}/>
    <Greeting name="Rod" favoriteNumber={43}/>
    {/* <Greeting name="Brandon" favoriteNumber={3}/> */}
  </div>
  );
}

export default App;
