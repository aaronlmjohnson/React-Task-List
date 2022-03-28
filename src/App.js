import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className="content">
      <form action="#" method="get">
        <div>
          <label htmlFor="add-task">Add Task: </label>
          <input type='text' id='add-task' name='add-task'/>
        </div>
      </form>
    </div>);
  }
}

export default App;
