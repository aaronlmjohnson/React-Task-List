import React, { Component } from "react";

class Overview extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // const { task } = this.props.task;
        // console.log(task);
       return <li className=''> {this.props.task}</li>
    }
}

export default Overview