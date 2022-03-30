import React, { Component } from "react";

class Overview extends Component{

  constructor(props){
      super(props)
  }

  render(){
    const { tasks } = this.props;

    return (
        <ul>
            {
                tasks.map((task,i)=>{
                    return(
                    <li key={task.id}>
                        {i+1}. {task.text} 
                        <button onClick={()=>{this.props.deleteTask(task.id)}}>delete</button>
                    </li>
                    );
                })
            }
        </ul>
    );
  }   
};

export default Overview;