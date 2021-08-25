import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import TodoList from './Components/TodoList';
import AddTask from './Components/AddTask';

export default class App extends Component {

  state = {
    todos : [
      {id:Math.random(),action:'learn HTML',isDone:true},
      {id:Math.random(),action:'learn Redux',isDone:false}
    ]
  }

  handleDelete = (x)=>{
    this.setState({todos:this.state.todos.filter(el=> el.id !== x )})
   
  }

  handleComplited = (i)=>{

    this.setState({todos:this.state.todos.map(el=>el.id===i ? {...el,isDone:!el.isDone}:el)})
  }

  handleAdd=(input)=>{
    const newTask ={
      id:Math.random(),
      action:input,
      isDone:false
    }
    this.setState({todos:[...this.state.todos,newTask]})
  }
  render() {
    return (
      <div className='App'>
        <AddTask add={this.handleAdd} />
        <TodoList list={this.state.todos} del={this.handleDelete } comp={this.handleComplited} />
      </div>
    )
  }
}

