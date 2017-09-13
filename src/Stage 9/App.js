import React, { Component } from 'react';
import Employee from './models/Employee';
import EmployeeEditor from ',/components/EmployeeEditor';
import EmployeeList from './components/EmployeeEditor';


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList />
          <EmployeeEditor />
        </div>
      </div>
    )
  }
}

export default App;
