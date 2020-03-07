import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


// this react hooks 
const app = props => {
 state = {
   persons: [
     {name: 'Max', age:28},
     {name: 'Manu', age:27},
     {name: 'Steph', age:26}
   ],
   otherState: 'some other value'
 }

 switchNameHandler = () =>{
   // Console.log('Was clicked!');
   // Don't DO THIS: this.state.persons[0].name = "Maximilian";
   this.setState({persons: [
        {name: 'Maximilian', age:28},
        {name: 'Manu', age:27},
        {name: 'Steph', age:25}
       ] // end array of persons 
        } // end pranthses of setstate
        );
 }

  render() {
    return (
      <div className="App">
       <h1>I'm a react developer</h1>
       <p>This is really working! </p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>  My hobbies: Racing </Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
