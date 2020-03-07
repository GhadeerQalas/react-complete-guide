import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons: [
     {name: 'Max', age:28},
     {name: 'Manu', age:27},
     {name: 'Steph', age:26}
   ]
 }


  render() {
    return (
      <div className="App">
       <h1>I'm a react developer</h1>
       <p>This is really working! </p>
       <button>Switch Name</button>
       <Person name="Ghadeer" age="23"/>
       <Person name="Afnan" age="27">  My hobbies: Racing </Person>
       <Person name="Zainab" age="47"/>
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
