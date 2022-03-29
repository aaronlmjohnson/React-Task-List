import React, { Component } from "react";
import Overview from './components/Overview';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(e){
    e.preventDefault();
    const task = document.getElementById('add-task').value;
    //updater function to add new task to tasks array
    this.setState(prevState => ({ tasks: [...prevState.tasks, task] }));


  }

  render(){
    return(
    <div className="content">
      <form action="#" method="get">
        <div>
          <label htmlFor="add-task">Add Task: </label>
          <input type='text' id='add-task' name='add-task'/>
          <input onClick = { this.addTask }type='submit' id='submit'/>
        </div>
      </form>
      <ul id="tasks">
          {this.state.tasks.map((item)=>{
            return <Overview task = { item }/>
          })}
      </ul>
    </div>);
  }
}

export default App;
