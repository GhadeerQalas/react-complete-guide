import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>I'm a react developer</h1>
       <p>This is really working! </p>
       <Person name="Ghadeer" age="23">My hobbies: Racing </Person>
       <Person name="Afnan" age="27"/>
       <Person name="Zainab" age="47"/>
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
