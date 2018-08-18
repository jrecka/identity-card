import React, { Component } from 'react';
// import './App.css';
import IdApplicationForm from './IdApplicationForm';

class App extends Component {
  render() {
    return (
      <IdApplicationForm option={[' ', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason']}/>
    );
  }
}

export default App;
