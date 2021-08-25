import React, { Component } from 'react'

export default class AddTask extends Component {

    state = {
        newText:''
    }

    handleChange = (e)=> this.setState({newText:e.target.value})
    handleSubmit = (e)=> {
        e.preventDefault();
        this.state.newText.trim() === ""?alert('please fill out input field'):
        this.props.add(this.state.newText)
        this.setState({newText:""})
    }
    render() {
        return (
            <div>
                <h1>Our To Do App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newText} onChange={this.handleChange} />
                    <button type="submit">Add</button> 
                </form>
            </div>
        )
    }
}
